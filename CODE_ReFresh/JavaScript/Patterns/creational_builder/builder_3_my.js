/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 3. Product
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Computer {
   constructor(name) {
      this.name = name;
      this.parts = {};
   }
   setCase = (pcCase = {}) => {
      this.parts.pcCase = {
         material: pcCase.material || 'metal',
         size: pcCase.size || '35x50x15',
         corner: pcCase.corner || 'vertical'
      };
   }

   setMB =  motherboard => (this.parts.motherboard = motherboard);
   setCPU = CPU => (this.parts.CPU = CPU);
   setGPU = GPU => (this.parts.GPU = GPU);
   setRAM = RAM => (this.parts.RAM = RAM);
   setSSD = SSD => (this.parts.SSD = SSD);
   setHDD = SSD => (this.parts.SSD = SSD);

   addExternalMonitor = display => (this.parts.display = display);
   addInnerDisplay = display => (this.parts.display = display);

   addCoolingSystem = coolSys => (this.parts.coolingSystem = coolSys);

   addPowerSystem = powerSystem => (this.parts.powerSystem = powerSystem);
   addPowerSupply = powerSupply => (this.parts.powerSupply = powerSupply);

   addMouse = mouse => (this.parts.mouse = mouse);
   addExternalKeyboard = keyboard => (this.parts.keyboard = keyboard);
   addInnerKeyboard = keyboard => (this.parts.keyboard = keyboard);
   addSpeaker = speaker => (this.parts.speaker = speaker);

   addPrinter = printer => (this.parts.printer = printer);
   addScanner = scanner => (this.parts.scanner = scanner);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 2. Builders:
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class CompBuilder {
   constructor(name){
      this.comp = new Computer(name);
   }
   getComputer(){
      const result = { name: this.comp.name, parts: {} };
      Object.keys(this.comp.parts).forEach(partName => (result.parts[partName] = this.comp.parts[partName]));
      return result;
   }
}

class NotebookBuilderZ05 extends CompBuilder {
   constructor(name) {
      super(`Notebook-${name}-Z05`);
      this.comp.setCase({ material: 'plastic', corner: 'inner' });
   }
   setup() {
      this.comp.setMB('MSI Z390-A Pro');
      this.comp.setCPU('Intel Core i9-9980XE');
      this.comp.setGPU('NVIDIA Quadro RTX 5000 Max-Q');
      this.comp.setRAM('Kingston Hyper X Fury');
      this.comp.setSSD('WD Black SN850');
   }
   addDisplay() {
      this.comp.addInnerDisplay('NV156QUM-N72');
   }
   addExtraEquipments() {
      this.comp.addPowerSupply('cable');
      this.comp.addMouse('Logitech G203 Lightsync');
      this.comp.addInnerKeyboard('PFU Happy Hacking Professional 2 (HHKB2)');
      this.comp.addSpeaker('Bose Companion 2 Series III Multimedia');
   }
}

class DesktopBuilderM133 extends CompBuilder {
   constructor(name) {
      super(`Game-desktop-${name}-M133`);
      this.comp.setCase({ material: 'plastic' });
   }
   setup() {
      this.comp.setMB('Asrock Z370 Pro4');
      this.comp.setCPU('Intel Core i9-10980HK');
      this.comp.setGPU('NVIDIA GeForce RTX 3070 Mobile');
      this.comp.setRAM('Ballistix Sport LT');
      this.comp.setSSD('Adata XPG Gammix S50 Lite');
   }
   addDisplay() {
      this.comp.addExternalMonitor('ASUS XG17AHP');
   }
   addExtraEquipments() {
      this.comp.addPowerSystem('Corsair AX1000');
      this.comp.addMouse('Razer Viper Ultimate Wireless');
      this.comp.addExternalKeyboard('SteelSeries Apex 7 TKL');
   }
   addPrintEquipment() {
      this.comp.addPrinter('LaserJet 85');
   }
   addScanEquipment() {
      this.comp.addScanner('HP ScanJet Pro 2500 f1 Flatbed Scanner');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 1. Directors
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class ShopDirectorBase {
   construct(builder) {
      builder.setup();
      builder.addDisplay();
      builder.addExtraEquipments();
   }
}
class ShopDirectorPrintScan {
   construct(builder) {
      builder.setup();
      builder.addDisplay();
      builder.addExtraEquipments();
      builder.addPrintEquipment();
      builder.addScanEquipment();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// 0. Customer work:
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const notebookBuilderZ05 = new NotebookBuilderZ05('Quadro');   // 1. Клиент делает запросс для конкретного строителя
const baseCompDirector = new ShopDirectorBase();                     // 2. Конкретный директор задает процедуру постройки
baseCompDirector.construct(notebookBuilderZ05);
const notebookResult = notebookBuilderZ05.getComputer();             // 3. Строитель отдает результат клиенту
console.log(notebookResult);

const desktopBuilderM133 = new DesktopBuilderM133('Alex');
const psCompDirector = new ShopDirectorPrintScan();
psCompDirector.construct(desktopBuilderM133);
const desktopResult = desktopBuilderM133.getComputer();
console.log(desktopResult);
