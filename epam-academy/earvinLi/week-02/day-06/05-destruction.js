var car = {
    model:'Benz',
    color:'black',
    year:1886,
    doors:0,
    historical:true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower:{
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}

// ES5
var carModel = car.model;
var carColor = car.color;
var carYear = car.year;
var carDoors = car.doors;
var carHistorical = car.historical;

var computerType = computer.type;
var computerMonitor = computer.monitor;
var computerMonitorColor = computerMonitor.color;
var computerMonitorSize = computerMonitor.size;
var computerMonitorHDMI = computerMonitor.HDMI;
var computerMonitorVGA = computerMonitor.VGA;
var computerTower = computer.tower;
var computerTowerColor = computerTower.color;
var computerTowerCPU = computerTower.CPU;
var computerTowerMemory = computerTower.memory;
var computerTowerSSD = computerTower.SSD;

console.log(computerTowerSSD);

// ES6
const {model, color, year, doors, historical} = car;

const {
  type,
  monitor: {
    color: monitorColor,
    size: monitorSize,
    HDMI: monitorHDMI,
    VGA: monitorVGA,
  },
  tower: {
    color: towerColor,
    CPU: towerCPU,
    memory: towerMemory,
    SSD: towerSSD,
  },
} = computer;

console.log(towerSSD);
