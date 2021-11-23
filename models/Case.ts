interface Case {
  name: string;
  vitals: Vitals;
  controller: Controller;
  lvadTeam: LVADTeam;
  //Labs: Labs; -- Not using this yet
}

interface Vitals {
  bloodPressure: BloodPressure;
  heartRate: CasePossibility;
  temperature: CasePossibility;
  pulseOximeter: CasePossibility;
  Respirations: CasePossibility;
}
interface Controller {
    display: {
        parameters: CasePossibility;
        arrowCheck: CasePossibility;
    }
    listenForHum: CasePossibility;
    pump: {
        isOn: {
            haveLVADTeamReplaceController: CasePossibility;
            replaceControllerYourself: CasePossibility;
        }
        isOff: {
            haveLVADTeamReplaceController: CasePossibility;
            replaceControllerYourself: CasePossibility;
        }
    }
}
interface LVADTeam {
    callCoordinator: CasePossibility;
}
interface BloodPressure {
  NIBPcuff: CasePossibility;
  doppler: CasePossibility;
}

interface Labs {
  CBC: CasePossibility;
}
interface CasePossibility {
  details: string;
  feedback: string;
  checkedByUser: boolean;
  requiredToCheck: boolean;
  criticalFailure: boolean;
  resolvesSimulation: boolean;
}
