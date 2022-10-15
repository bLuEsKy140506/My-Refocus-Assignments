// CONDITIONALS
//My First Assignments
/*
Task 1. Pulse oximeter reading (part 1)
You are asked to develop a JavaScript app compatible with smartwatches. You use
the sensor data of its pulse oximeter to tell a user that their oxygen level is normal
or alarming. Write a function that alerts a user of their oxygen saturation.
Oxygen Saturation,(SpO2)%.
  Observation
    ≥ 96%        Normal reading.
    95%          Acceptable to continue home monitoring.
    93–94%       Seek advice from health professionals.
    ≤ 92%        Seek urgent medical advice.
*/

// --------- Oxygen Saturation,(SpO2)%  -----------------------
function oxygenSaturation(oxygenLevel) {
  if (oxygenLevel >= 96) {
    console.log(`${oxygenLevel}% is normal.`);
  } else if (oxygenLevel === 95) {
    console.log(`${oxygenLevel}% is acceptable to continue home monitoring.`);
  } else if (oxygenLevel <= 94 && oxygenLevel >= 93) {
    console.log(
      `${oxygenLevel}% is to seek advice from health professionals. `
    );
  } else if (oxygenLevel <= 92) {
    console.log(`${oxygenLevel}% is to seek urgent medical advice.`);
  } else {
    console.log("INVALID INPUT");
  }
}

oxygenSaturation(97);
oxygenSaturation(95);
oxygenSaturation(93.5);
oxygenSaturation(92);
oxygenSaturation("Weee");

//--------------------------------------------------------------------------------------------------
console.log(
  "====================================================================================="
);
/*
Task 2. Pulse oximeter reading (part 2)
Continue with the last task, and provide more observations based on the pulse
rate.
Pulse Rate,
beats per minute                Observation
40 100                  Normal reading.
101 109                 Acceptable to continue home monitoring.
110 130                 Seek advice from hoxygenSaturation
≥ 131                   Seek urgent medical advice.
*/

// ----- Pulse Rate, beats per minute  --------------
function pulseRate(pulse) {
  if (pulse >= 40 && pulse <= 100) {
    console.log(`${pulse} per minute is normal.`);
  } else if (pulse >= 101 && pulse <= 109) {
    console.log(
      `${pulse} per minute is acceptable to continue home monitoring.`
    );
  } else if (pulse >= 110 && pulse <= 130) {
    console.log(`${pulse} per minute is to seek advice from health profession`);
  } else if (pulse >= 131) {
    console.log(`${pulse} per minute is to seek urgent medical advice.`);
  } else {
    console.log("INVALID INPUT");
  }
}

pulseRate(55);
pulseRate(108);
pulseRate(120);
pulseRate(132);
pulseRate("eeeW");
