let currentWeapon;
let currentAmmo;

const getPedStats = () => {
  const playerPed = PlayerPedId();
  const health = GetEntityHealth(playerPed);
  const armor = GetPedArmour(playerPed);
  return [health, armor];
};

setInterval(() => {
let ped = PlayerPedId()
let hp = GetEntityHealth(ped)
SendNUIMessage({
  hp: hp-100,
  ar: GetPedArmour(ped), 
  pcount: GetActivePlayers().length
  
});
}, 200);

RegisterCommand("armor", (source, args)=>{  SetPedArmour(PlayerPedId(), 100 ) })


// Variáveis para armazenar informações sobre a arma atual

const updateHUD = () => {
  const playerPeds = PlayerPedId();
  const health = GetEntityHealth(playerPeds) - 100;
  const armor = GetPedArmour(playerPeds);
  const playerCount = GetActivePlayers().length;

  const playerPed1 = GetPlayerPed(-1);
  const currentWeapon = GetSelectedPedWeapon(playerPed1);
  const currentAmmo = GetAmmoInPedWeapon(playerPed1, currentWeapon);
  const currentClip = GetAmmoInClip(GetPlayerPed(-1), currentWeapon)[1];

  SendNUIMessage({
    hp: health,
    ar: armor,
    pcount: playerCount,
    ammo: {
      currentClip,
      currentAmmo: currentAmmo - currentClip
    }
  });
};

setInterval(() => {
  updateHUD();
}, 16.67);





