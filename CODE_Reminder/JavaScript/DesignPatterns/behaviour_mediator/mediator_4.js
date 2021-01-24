class ATCMediator {
   registerRunway(runway) {
      this.runway = runway;
   }
   registerFlight(flight) {
      this.flight = flight;
   }
   isLandingOk(status) {
      return this.land || null;
   }
   setLandingStatus(status) {
      this.land = status;
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Command {
   constructor(atcMediator) {
      this.atcMediator = atcMediator;
   }
   land() {
      throw new Error('method land() not implemented yet');
   }
}

class Flight extends Command {
   constructor(atcMediator) {
      super(atcMediator);
   }
   land() {
      if (this.atcMediator.isLandingOk()) {
         console.log("Successfully Landed.");
         this.atcMediator.setLandingStatus(true);
      } else {
         console.log("Waiting for landing.");
      }
   }
   getReady() {
      console.log("Ready for landing.");
   }
}

class Runway extends Command {
   constructor(atcMediator) {
      super(atcMediator);
      this.atcMediator.setLandingStatus(true);
   }
   land() {
      console.log("Landing permission granted.");
      this.atcMediator.setLandingStatus(true);
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const atcMediator = new ATCMediator();
const sparrow101 = new Flight(atcMediator);
const mainRunway = new Runway(atcMediator);

atcMediator.registerFlight(sparrow101);
atcMediator.registerRunway(mainRunway);
sparrow101.getReady();
mainRunway.land();
sparrow101.land();
