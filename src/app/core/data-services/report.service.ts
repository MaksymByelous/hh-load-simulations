import { Injectable } from '@angular/core';

export interface ISimulation {
  _id: object;
  simName: string;
  type: string;
  resultLoadCurve: IResultLoadCurve;
  availabilities: IAvailability[];
  appliances: object[];
}

export interface IItemDate {
  $date: string;
}

export interface IAvailability {
  _id: object;
  name: string;
  type: string;
  activities: IActivities[];
  creationDate: IItemDate;
}

export interface IActivities {
  name: string;
  start: IItemDate;
  end: IItemDate;
  type: string;
}

export interface IAppliance {
  _id: object;
  name: string;
  type: string;
  description: string;
  creationDate: IItemDate;
  operationalModes: IOperationalModes[];
}

export interface IOperationalModes {
  name: string;
  description: string;
  powerInputOn: number;
  powerInputOff: number;
  restartDelay: number;
  scaleFactor: number;
  duration: number;
  leftCycleTime: number;
  leftRestartDelay: number;
}

export interface IResultLoadCurve {
  name: string;
  description: string;
  creationDate: IItemDate;
  measurements: IResultLoadMeasurements[];
}

export interface IResultLoadMeasurements {
  time: number;
  value: number;
  lightingValue: number;
  activeOccupancy: number;
  occupancy: number;
}

const report = [
  {
    _id: {
      $oid: '5aaa2ff5c7c28a0bcc9c5b80'
    },
    simName: 'Simulation 2',
    type: 'HOUSEHOLD_SINGLE',
    resultLoadCurve: {
      name: 'Sim_Simulation 2_1',
      description: 'This is auto created curve for simulation Simulation 2and household number 1',
      creationDate: {
        $date: '2018-03-15T08:33:57.177Z'
      },
      measurements: [
        {
          time: 0,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 10,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 20,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 30,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 40,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 50,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 60,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 70,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 80,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 90,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 100,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 110,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 120,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 130,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 140,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 150,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 160,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 170,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 180,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 190,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 200,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 210,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 220,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 230,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 240,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 250,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 260,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 270,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 280,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 290,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 300,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 310,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 320,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 330,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 340,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 350,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 360,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 370,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 380,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 390,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 400,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 410,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 420,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 430,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 440,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 450,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 460,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 470,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 480,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 490,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 500,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 510,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 520,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 530,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 540,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 550,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 560,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 570,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 580,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 590,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 600,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 610,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 620,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 630,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 640,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 650,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 660,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 670,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 680,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 690,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 700,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 710,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 720,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 730,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 740,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 750,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 760,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 770,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 780,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 790,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 800,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 810,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 820,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 830,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 840,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 850,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 860,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 870,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 880,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 890,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 900,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 910,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 920,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 930,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 940,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 950,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 960,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 970,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 980,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 990,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 1000,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 1010,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 1020,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 1030,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 0
        },
        {
          time: 1040,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1050,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1060,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1070,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1080,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1090,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1100,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1110,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1120,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1130,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1140,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1150,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1160,
          value: 2100,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1170,
          value: 2100,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1180,
          value: 2100,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1190,
          value: 2100,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1200,
          value: 2100,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1210,
          value: 2100,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1220,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1230,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1240,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1250,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1260,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1270,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1280,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1290,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1300,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1310,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1320,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1330,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1340,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1350,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1360,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1370,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1380,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1390,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1400,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1410,
          value: 2015,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1420,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1430,
          value: 2000,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        }
      ]
    },
    availabilities: [
      {
        _id: {
          $oid: '5aa83281020c6a1af847ee5f'
        },
        name: 'Worker1_Weekend',
        type: 'AVAILABILITY_WORKER',
        activities: [
          {
            name: 'Wakeup',
            start: {
              $date: '1970-01-01T10:07:21.735Z'
            },
            end: {
              $date: '1970-01-01T10:22:21.735Z'
            },
            type: 'ACTIVITY_WAKUP'
          },
          {
            name: 'Take Shower',
            start: {
              $date: '1970-01-01T11:07:03.043Z'
            },
            end: {
              $date: '1970-01-01T11:22:03.043Z'
            },
            type: 'ACTIVITY_MORNING_COURSE'
          },
          {
            name: 'Get Ready',
            start: {
              $date: '1970-01-01T11:37:36.551Z'
            },
            end: {
              $date: '1970-01-01T11:52:36.551Z'
            },
            type: 'ACTIVITY_GETTING_READY'
          },
          {
            name: 'Shopping',
            start: {
              $date: '1970-01-01T12:08:15.457Z'
            },
            end: {
              $date: '1970-01-01T12:23:15.457Z'
            },
            type: 'ACTIVITY_GOOUT'
          },
          {
            name: 'Back home',
            start: {
              $date: '1970-01-01T16:18:10.922Z'
            },
            end: {
              $date: '1970-01-01T17:18:10.922Z'
            },
            type: 'ACTIVITY_BACK_HOME'
          },
          {
            name: 'Charge Laptop',
            start: {
              $date: '1970-01-01T18:19:31.918Z'
            },
            end: {
              $date: '1970-01-01T19:19:31.918Z'
            },
            type: 'ACTIVITY_COMPUTING'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T19:49:38.840Z'
            },
            end: {
              $date: '1970-01-01T20:49:38.840Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Watch TV',
            start: {
              $date: '1970-01-01T20:21:30.224Z'
            },
            end: {
              $date: '1969-12-31T23:21:30.225Z'
            },
            type: 'ACTIVITY_WATCHING_TV'
          },
          {
            name: 'Watch Movie',
            start: {
              $date: '1970-01-01T20:34:22.134Z'
            },
            end: {
              $date: '1970-01-01T22:34:22.134Z'
            },
            type: 'ACTIVITY_WATCHING_MOVIE'
          },
          {
            name: 'Sleep',
            start: {
              $date: '1970-01-01T01:23:16.191Z'
            },
            end: {
              $date: '1970-01-01T10:23:16.191Z'
            },
            type: 'ACTIVITY_SLEEP'
          }
        ],
        creationDate: {
          $date: '2018-03-13T20:20:16.535Z'
        }
      }
    ],
    appliances: [
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b484d'
        },
        name: 'Hi-Fi',
        type: 'APPLIANCE_HIFI',
        description: 'This is Appliance Hi-Fi from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Hi-Fi',
            powerInputOn: 100,
            powerInputOff: 9,
            restartDelay: 0,
            scaleFactor: 4666316,
            duration: 60,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5aa417f6020c6a1c80bb0330'
        },
        name: 'TV Receiver Box',
        type: 'APPLIANCE_TV_RECEIVER',
        description: 'This is Appliance TV Receiver Box from import operation',
        creationDate: {
          $date: '2018-03-10T17:37:58.618Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV Receiver box',
            powerInputOn: 27,
            powerInputOff: 15,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b484a'
        },
        name: 'Cassette / CD Player',
        type: 'APPLIANCE_CD_PLAYER',
        description: 'This is Appliance Cassette / CD Player from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Cassette / CD Player',
            powerInputOn: 15,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 72059299,
            duration: 60,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4865'
        },
        name: 'Other electric space heating',
        type: 'APPLIANCE_HEATING',
        description: 'This is Appliance Other electric space heating from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Other electric space heating',
            powerInputOn: 2000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 23852943,
            duration: 240,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      }
    ]
  },

  {
    _id: {
      $oid: '5aaa3012c7c28a0bcc9c5b82'
    },
    simName: 'Simulation 2',
    type: 'HOUSEHOLD_FAMILE',
    resultLoadCurve: {
      name: 'Sim_Simulation 2_3',
      description: 'This is auto created curve for simulation Simulation 2and household number 3',
      creationDate: {
        $date: '2018-03-15T08:34:26.370Z'
      },
      measurements: [
        {
          time: 0,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 10,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 20,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 30,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 40,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 50,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 60,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 70,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 80,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 90,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 100,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 110,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 120,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 130,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 140,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 150,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 160,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 170,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 180,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 190,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 200,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 210,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 220,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 230,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 240,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 250,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 260,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 270,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 280,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 290,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 300,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 310,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 320,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 330,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 340,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 350,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 360,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 370,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 380,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 390,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 400,
          value: 10310,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 410,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 420,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 430,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 440,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 450,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 460,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 470,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 480,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 490,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 500,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 510,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 520,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 530,
          value: 4735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 540,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 550,
          value: 4735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 560,
          value: 4735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 570,
          value: 4735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 580,
          value: 9360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 590,
          value: 9360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 600,
          value: 18360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 610,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 620,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 630,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 640,
          value: 18360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 650,
          value: 18360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 660,
          value: 22360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 670,
          value: 26360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 680,
          value: 26360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 690,
          value: 26360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 700,
          value: 26360,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 710,
          value: 21735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 720,
          value: 17735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 730,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 740,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 750,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 760,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 770,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 780,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 790,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 800,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 810,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 820,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 830,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 840,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 850,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 860,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 870,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 880,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 890,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 900,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 910,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 920,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 930,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 940,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 950,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 960,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 970,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 980,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 990,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1000,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1010,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1020,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1030,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1040,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1050,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1060,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1070,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1080,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1090,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1100,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1110,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1120,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1130,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1140,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1150,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1160,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1170,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1180,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1190,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1200,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1210,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1220,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1230,
          value: 13735,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1240,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1250,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1260,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1270,
          value: 9110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1280,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1290,
          value: 9536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1300,
          value: 9977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1310,
          value: 9977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1320,
          value: 9977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1330,
          value: 9977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1340,
          value: 9977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1350,
          value: 977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1360,
          value: 977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1370,
          value: 977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1380,
          value: 977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1390,
          value: 977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1400,
          value: 977,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1410,
          value: 536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1420,
          value: 536,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1430,
          value: 110,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        }
      ]
    },
    availabilities: [
      {
        _id: {
          $oid: '5aa86578020c6a1af847ee6a'
        },
        name: 'Worker6_Weekend',
        type: 'AVAILABILITY_WORKER',
        activities: [
          {
            name: 'Wakeup',
            start: {
              $date: '1970-01-01T07:06:57.116Z'
            },
            end: {
              $date: '1970-01-01T07:21:57.116Z'
            },
            type: 'ACTIVITY_WAKUP'
          },
          {
            name: 'Breakfast',
            start: {
              $date: '1970-01-01T07:48:54.455Z'
            },
            end: {
              $date: '1970-01-01T09:03:54.455Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Shower',
            start: {
              $date: '1970-01-01T08:52:17.579Z'
            },
            end: {
              $date: '1970-01-01T21:22:17.579Z'
            },
            type: 'ACTIVITY_MORNING_COURSE'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T09:33:35.909Z'
            },
            end: {
              $date: '1970-01-01T10:48:35.909Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Cleaning',
            start: {
              $date: '1970-01-01T09:55:41.174Z'
            },
            end: {
              $date: '1970-01-01T10:55:41.174Z'
            },
            type: 'ACTIVITY_CLEANING_HOME'
          },
          {
            name: 'Wash Clothes',
            start: {
              $date: '1970-01-01T10:07:23.535Z'
            },
            end: {
              $date: '1970-01-01T11:22:23.535Z'
            },
            type: 'ACTIVITY_WASHCLOTHES'
          },
          {
            name: 'Wash Dishes',
            start: {
              $date: '1970-01-01T12:04:53.395Z'
            },
            end: {
              $date: '1970-01-01T13:19:53.395Z'
            },
            type: 'ACTIVITY_WASHING_DISHES'
          },
          {
            name: 'Go Out',
            start: {
              $date: '1970-01-01T15:08:41.071Z'
            },
            end: {
              $date: '1970-01-01T19:53:41.071Z'
            },
            type: 'ACTIVITY_GOOUT'
          },
          {
            name: 'Watch movie',
            start: {
              $date: '1970-01-01T20:36:23.215Z'
            },
            end: {
              $date: '1970-01-01T22:21:23.215Z'
            },
            type: 'ACTIVITY_WATCHING_MOVIE'
          },
          {
            name: 'Watch TV',
            start: {
              $date: '1970-01-01T20:36:04.993Z'
            },
            end: {
              $date: '1970-01-01T22:21:04.993Z'
            },
            type: 'ACTIVITY_WATCHING_TV'
          },
          {
            name: 'Charge Laptop',
            start: {
              $date: '1970-01-01T20:04:02.120Z'
            },
            end: {
              $date: '1970-01-01T20:49:02.120Z'
            },
            type: 'ACTIVITY_COMPUTING'
          },
          {
            name: 'Sleep',
            start: {
              $date: '1969-12-31T23:22:49.030Z'
            },
            end: {
              $date: '1970-01-01T07:22:49.029Z'
            },
            type: 'ACTIVITY_SLEEP'
          },
          {
            name: 'Heating',
            start: {
              $date: '1969-12-31T23:20:36.134Z'
            },
            end: {
              $date: '1970-01-01T05:50:36.133Z'
            },
            type: 'ACTIVITY_HEATING_VENTILATION'
          }
        ],
        creationDate: {
          $date: '2018-03-14T00:14:27.369Z'
        }
      },
      {
        _id: {
          $oid: '5aa86bd9020c6a1af847ee6b'
        },
        name: 'Non-Worker 3',
        type: 'AVAILABILITY_NON_WORKER',
        activities: [
          {
            name: 'Wakeup',
            start: {
              $date: '1970-01-01T07:36:07.014Z'
            },
            end: {
              $date: '1970-01-01T07:51:07.014Z'
            },
            type: 'ACTIVITY_WAKUP'
          },
          {
            name: 'Shower',
            start: {
              $date: '1970-01-01T07:52:30.735Z'
            },
            end: {
              $date: '1970-01-01T08:07:30.735Z'
            },
            type: 'ACTIVITY_MORNING_COURSE'
          },
          {
            name: 'Watch TV',
            start: {
              $date: '1970-01-01T12:20:27.082Z'
            },
            end: {
              $date: '1970-01-01T14:50:27.082Z'
            },
            type: 'ACTIVITY_WATCHING_TV'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T08:34:21.412Z'
            },
            end: {
              $date: '1970-01-01T11:19:21.412Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Cleaning',
            start: {
              $date: '1970-01-01T10:10:59.033Z'
            },
            end: {
              $date: '1970-01-01T11:10:59.033Z'
            },
            type: 'ACTIVITY_CLEANING_HOME'
          },
          {
            name: 'Rest',
            start: {
              $date: '1970-01-01T14:52:50.620Z'
            },
            end: {
              $date: '1970-01-01T15:52:50.620Z'
            },
            type: 'ACTIVITY_SLEEP'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T18:49:15.435Z'
            },
            end: {
              $date: '1970-01-01T19:34:15.435Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Wash Dishes',
            start: {
              $date: '1970-01-01T19:33:27.177Z'
            },
            end: {
              $date: '1970-01-01T20:33:27.177Z'
            },
            type: 'ACTIVITY_WASHING_DISHES'
          },
          {
            name: 'Watch TV',
            start: {
              $date: '1970-01-01T20:20:30.534Z'
            },
            end: {
              $date: '1970-01-01T22:50:30.534Z'
            },
            type: 'ACTIVITY_WATCHING_TV'
          },
          {
            name: 'Sleep',
            start: {
              $date: '1969-12-31T23:23:26.081Z'
            },
            end: {
              $date: '1970-01-01T07:53:26.080Z'
            },
            type: 'ACTIVITY_SLEEP'
          }
        ],
        creationDate: {
          $date: '2018-03-14T00:24:57.137Z'
        }
      }
    ],
    appliances: [
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b485a'
        },
        name: 'Microwave',
        type: 'APPLIANCE_MICROWAVE',
        description: 'This is Appliance Microwave from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Microwave',
            powerInputOn: 1250,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 27532561,
            duration: 30,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4859'
        },
        name: 'Oven',
        type: 'APPLIANCE_OVEN',
        description: 'This is Appliance Oven from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Oven',
            powerInputOn: 2125,
            powerInputOff: 3,
            restartDelay: 0,
            scaleFactor: 64797908,
            duration: 27,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b484f'
        },
        name: 'Vacuum',
        type: 'APPLIANCE_VACCUM_CLEANER',
        description: 'This is Appliance Vacuum from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Vacuum',
            powerInputOn: 2000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 69522243,
            duration: 20,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b484a'
        },
        name: 'Cassette / CD Player',
        type: 'APPLIANCE_CD_PLAYER',
        description: 'This is Appliance Cassette / CD Player from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Cassette / CD Player',
            powerInputOn: 15,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 72059299,
            duration: 60,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4855'
        },
        name: 'TV 3',
        type: 'APPLIANCE_TV',
        description: 'This is Appliance TV 3 from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV 3',
            powerInputOn: 124,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 344486856,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5aa417f6020c6a1c80bb0330'
        },
        name: 'TV Receiver Box',
        type: 'APPLIANCE_TV_RECEIVER',
        description: 'This is Appliance TV Receiver Box from import operation',
        creationDate: {
          $date: '2018-03-10T17:37:58.618Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV Receiver box',
            powerInputOn: 27,
            powerInputOff: 15,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4864'
        },
        name: 'Storage heaters',
        type: 'APPLIANCE_STORAGE_HEATER',
        description: 'This is Appliance Storage heaters from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Storage heaters',
            powerInputOn: 10200,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 8224336,
            duration: 360,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4863'
        },
        name: 'Electric shower',
        type: 'APPLIANCE_ELECTRIC_SHOWER',
        description: 'This is Appliance Electric shower from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Electric shower',
            powerInputOn: 9000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 96608465,
            duration: 3,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4855'
        },
        name: 'TV 3',
        type: 'APPLIANCE_TV',
        description: 'This is Appliance TV 3 from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV 3',
            powerInputOn: 124,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 344486856,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5aa417f6020c6a1c80bb0330'
        },
        name: 'TV Receiver Box',
        type: 'APPLIANCE_TV_RECEIVER',
        description: 'This is Appliance TV Receiver Box from import operation',
        creationDate: {
          $date: '2018-03-10T17:37:58.618Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV Receiver box',
            powerInputOn: 27,
            powerInputOff: 15,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b484f'
        },
        name: 'Vacuum',
        type: 'APPLIANCE_VACCUM_CLEANER',
        description: 'This is Appliance Vacuum from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Vacuum',
            powerInputOn: 2000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 69522243,
            duration: 20,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b485a'
        },
        name: 'Microwave',
        type: 'APPLIANCE_MICROWAVE',
        description: 'This is Appliance Microwave from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Microwave',
            powerInputOn: 1250,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 27532561,
            duration: 30,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4854'
        },
        name: 'TV 2',
        type: 'APPLIANCE_TV',
        description: 'This is Appliance TV 2 from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV 2',
            powerInputOn: 124,
            powerInputOff: 3,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4847'
        },
        name: 'Refrigerator',
        type: 'APPLIANCE_FRIDGE',
        description: 'This is Appliance Refrigerator from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Refrigerator',
            powerInputOn: 110,
            powerInputOff: 0,
            restartDelay: 36,
            scaleFactor: 313068377,
            duration: 18,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      }
    ]
  },
  {
    _id: {
      $oid: '5aa94afd7f50d22e74ed4de4'
    },
    simName: 'Simulation 1',
    type: 'HOUSEHOLD_FAMILE',
    resultLoadCurve: {
      name: 'Sim_Simulation 1_5',
      description: 'This is auto created curve for simulation Simulation 1and household number 5',
      creationDate: {
        $date: '2018-03-14T16:17:01.410Z'
      },
      measurements: [
        {
          time: 0,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 10,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 20,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 30,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 40,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 50,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 60,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 70,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 80,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 90,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 100,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 110,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 120,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 130,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 140,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 150,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 160,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 170,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 180,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 190,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 200,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 210,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 220,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 230,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 240,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 250,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 260,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 270,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 280,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 290,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 300,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 310,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 320,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 330,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 340,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 350,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 360,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 370,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 380,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 390,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 400,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 410,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 420,
          value: 136,
          lightingValue: 135,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 430,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 440,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 450,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 460,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 470,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 480,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 490,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 500,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 510,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 520,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 530,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 540,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 550,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 560,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 570,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 580,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 590,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 600,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 610,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 620,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 630,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 640,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 650,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 660,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 670,
          value: 2126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 680,
          value: 4126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 690,
          value: 4126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 700,
          value: 4126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 710,
          value: 4126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 720,
          value: 4126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 730,
          value: 4126,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 740,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 750,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 760,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 770,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 780,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 790,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 800,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 810,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 820,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 830,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 840,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 850,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 860,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 870,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 880,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 890,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 900,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 910,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 920,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 930,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 940,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 950,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 960,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 970,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 980,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 990,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1000,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1010,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1020,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1030,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1040,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1050,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1060,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1070,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1080,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1090,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 1
        },
        {
          time: 1100,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1110,
          value: 121,
          lightingValue: 120,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1120,
          value: 121,
          lightingValue: 120,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1130,
          value: 161,
          lightingValue: 160,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1140,
          value: 201,
          lightingValue: 200,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1150,
          value: 201,
          lightingValue: 200,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1160,
          value: 201,
          lightingValue: 200,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1170,
          value: 201,
          lightingValue: 200,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1180,
          value: 201,
          lightingValue: 200,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1190,
          value: 2366,
          lightingValue: 240,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1200,
          value: 2426,
          lightingValue: 300,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1210,
          value: 2426,
          lightingValue: 300,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1220,
          value: 4551,
          lightingValue: 300,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1230,
          value: 4611,
          lightingValue: 360,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1240,
          value: 2546,
          lightingValue: 420,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1250,
          value: 2581,
          lightingValue: 455,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1260,
          value: 2581,
          lightingValue: 455,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1270,
          value: 2581,
          lightingValue: 455,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1280,
          value: 807,
          lightingValue: 407,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1290,
          value: 807,
          lightingValue: 407,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1300,
          value: 807,
          lightingValue: 407,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1310,
          value: 1206,
          lightingValue: 407,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1320,
          value: 1506,
          lightingValue: 707,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1330,
          value: 1526,
          lightingValue: 727,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1340,
          value: 1426,
          lightingValue: 627,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1350,
          value: 1526,
          lightingValue: 727,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1360,
          value: 1506,
          lightingValue: 707,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1370,
          value: 1466,
          lightingValue: 667,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1380,
          value: 1526,
          lightingValue: 727,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1390,
          value: 1721,
          lightingValue: 922,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1400,
          value: 1322,
          lightingValue: 922,
          activeOccupancy: 1,
          occupancy: 2
        },
        {
          time: 1410,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1420,
          value: 400,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1430,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        }
      ]
    },
    availabilities: [
      {
        _id: {
          $oid: '5aa84654020c6a1af847ee65'
        },
        name: 'Worker4_Weekday',
        type: 'AVAILABILITY_WORKER',
        activities: [
          {
            name: 'Wakeup',
            start: {
              $date: '1970-01-01T05:21:45.932Z'
            },
            end: {
              $date: '1970-01-01T05:36:45.932Z'
            },
            type: 'ACTIVITY_WAKUP'
          },
          {
            name: 'Shower',
            start: {
              $date: '1970-01-01T05:36:48.815Z'
            },
            end: {
              $date: '1970-01-01T05:51:48.815Z'
            },
            type: 'ACTIVITY_MORNING_COURSE'
          },
          {
            name: 'Get Ready',
            start: {
              $date: '1970-01-01T05:36:37.386Z'
            },
            end: {
              $date: '1970-01-01T05:51:37.386Z'
            },
            type: 'ACTIVITY_GETTING_READY'
          },
          {
            name: 'Breakfast',
            start: {
              $date: '1970-01-01T05:52:24.311Z'
            },
            end: {
              $date: '1970-01-01T06:07:24.311Z'
            },
            type: 'ACTIVITY_TOASTING_BREAD'
          },
          {
            name: 'Leave for Work',
            start: {
              $date: '1970-01-01T06:07:41.639Z'
            },
            end: {
              $date: '1970-01-01T06:22:41.639Z'
            },
            type: 'ACTIVITY_GOOUT'
          },
          {
            name: 'Back home',
            start: {
              $date: '1970-01-01T17:18:11.057Z'
            },
            end: {
              $date: '1970-01-01T17:33:11.057Z'
            },
            type: 'ACTIVITY_BACK_HOME'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T19:19:43.422Z'
            },
            end: {
              $date: '1970-01-01T20:19:43.422Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Watch TV',
            start: {
              $date: '1970-01-01T20:50:01.253Z'
            },
            end: {
              $date: '1970-01-01T22:20:01.253Z'
            },
            type: 'ACTIVITY_WATCHING_TV'
          },
          {
            name: 'Sleep',
            start: {
              $date: '1970-01-01T22:23:18.768Z'
            },
            end: {
              $date: '1970-01-01T05:38:18.768Z'
            },
            type: 'ACTIVITY_SLEEP'
          },
          {
            name: 'Heat',
            start: {
              $date: '1970-01-01T22:22:55.065Z'
            },
            end: {
              $date: '1970-01-01T03:22:55.065Z'
            },
            type: 'ACTIVITY_HEATING_VENTILATION'
          }
        ],
        creationDate: {
          $date: '2018-03-13T21:44:52.063Z'
        }
      },
      {
        _id: {
          $oid: '5aa86bd9020c6a1af847ee6b'
        },
        name: 'Non-Worker 3',
        type: 'AVAILABILITY_NON_WORKER',
        activities: [
          {
            name: 'Wakeup',
            start: {
              $date: '1970-01-01T07:37:01.490Z'
            },
            end: {
              $date: '1970-01-01T07:52:01.490Z'
            },
            type: 'ACTIVITY_WAKUP'
          },
          {
            name: 'Shower',
            start: {
              $date: '1970-01-01T07:51:48.386Z'
            },
            end: {
              $date: '1970-01-01T08:06:48.386Z'
            },
            type: 'ACTIVITY_MORNING_COURSE'
          },
          {
            name: 'Watch TV',
            start: {
              $date: '1970-01-01T12:20:31.813Z'
            },
            end: {
              $date: '1970-01-01T14:50:31.813Z'
            },
            type: 'ACTIVITY_WATCHING_TV'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T08:35:13.341Z'
            },
            end: {
              $date: '1970-01-01T11:20:13.341Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Cleaning',
            start: {
              $date: '1970-01-01T10:11:29.264Z'
            },
            end: {
              $date: '1970-01-01T11:11:29.264Z'
            },
            type: 'ACTIVITY_CLEANING_HOME'
          },
          {
            name: 'Rest',
            start: {
              $date: '1970-01-01T14:53:28.394Z'
            },
            end: {
              $date: '1970-01-01T15:53:28.394Z'
            },
            type: 'ACTIVITY_SLEEP'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T18:49:20.476Z'
            },
            end: {
              $date: '1970-01-01T19:34:20.476Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Wash Dishes',
            start: {
              $date: '1970-01-01T19:33:13.603Z'
            },
            end: {
              $date: '1970-01-01T20:33:13.603Z'
            },
            type: 'ACTIVITY_WASHING_DISHES'
          },
          {
            name: 'Watch TV',
            start: {
              $date: '1970-01-01T20:20:50.246Z'
            },
            end: {
              $date: '1970-01-01T22:50:50.246Z'
            },
            type: 'ACTIVITY_WATCHING_TV'
          },
          {
            name: 'Sleep',
            start: {
              $date: '1969-12-31T23:23:19.934Z'
            },
            end: {
              $date: '1970-01-01T07:53:19.933Z'
            },
            type: 'ACTIVITY_SLEEP'
          }
        ],
        creationDate: {
          $date: '2018-03-14T00:24:57.137Z'
        }
      }
    ],
    appliances: [
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4863'
        },
        name: 'Electric shower',
        type: 'APPLIANCE_ELECTRIC_SHOWER',
        description: 'This is Appliance Electric shower from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Electric shower',
            powerInputOn: 9000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 96608465,
            duration: 3,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4859'
        },
        name: 'Oven',
        type: 'APPLIANCE_OVEN',
        description: 'This is Appliance Oven from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Oven',
            powerInputOn: 2125,
            powerInputOff: 3,
            restartDelay: 0,
            scaleFactor: 64797908,
            duration: 27,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4853'
        },
        name: 'TV 1',
        type: 'APPLIANCE_TV',
        description: 'This is Appliance TV 1 from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV 1',
            powerInputOn: 124,
            powerInputOff: 3,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4863'
        },
        name: 'Electric shower',
        type: 'APPLIANCE_ELECTRIC_SHOWER',
        description: 'This is Appliance Electric shower from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Electric shower',
            powerInputOn: 9000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 96608465,
            duration: 3,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4855'
        },
        name: 'TV 3',
        type: 'APPLIANCE_TV',
        description: 'This is Appliance TV 3 from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV 3',
            powerInputOn: 124,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 344486856,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b484f'
        },
        name: 'Vacuum',
        type: 'APPLIANCE_VACCUM_CLEANER',
        description: 'This is Appliance Vacuum from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Vacuum',
            powerInputOn: 2000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 69522243,
            duration: 20,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4853'
        },
        name: 'TV 1',
        type: 'APPLIANCE_TV',
        description: 'This is Appliance TV 1 from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV 1',
            powerInputOn: 124,
            powerInputOff: 3,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5aa417f6020c6a1c80bb0330'
        },
        name: 'TV Receiver Box',
        type: 'APPLIANCE_TV_RECEIVER',
        description: 'This is Appliance TV Receiver Box from import operation',
        creationDate: {
          $date: '2018-03-10T17:37:58.618Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV Receiver box',
            powerInputOn: 27,
            powerInputOff: 15,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5aa049b0020c6a0650dd5c08'
        },
        name: 'abcd',
        type: 'APPLIANCE_FRIDGE',
        description: 'sdvsv',
        creationDate: {
          $date: '2018-03-07T20:21:51.501Z'
        },
        operationalModes: [
          {
            name: 'sv',
            description: 'svsv',
            powerInputOn: 1,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 10,
            loadCurve: {
              name: 'asvsv',
              description: 'svv',
              measurements: [
                {
                  time: 5,
                  value: 5,
                  lightingValue: 0,
                  activeOccupancy: 0,
                  occupancy: 0
                }
              ]
            },
            duration: 30,
            leftCycleTime: 5,
            leftRestartDelay: 5
          }
        ]
      }
    ]
  },
  {
    _id: {
      $oid: '5aaa43b3c7c28a0bcc9c5b99'
    },
    simName: 'Simulation 3',
    type: 'HOUSEHOLD_FAMILE',
    resultLoadCurve: {
      name: 'Sim_Simulation 3_6',
      description: 'This is auto created curve for simulation Simulation 3and household number 6',
      creationDate: {
        $date: '2018-03-15T09:58:11.589Z'
      },
      measurements: [
        {
          time: 0,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 20,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 40,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 60,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 80,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 100,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 120,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 140,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 160,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 180,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 200,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 220,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 240,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 260,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 280,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 300,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 320,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 340,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 360,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 380,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 400,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 420,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 440,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 460,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 480,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 500,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 520,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 540,
          value: 2501,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 560,
          value: 2501,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 580,
          value: 20501,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 600,
          value: 38501,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 620,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 640,
          value: 20501,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 660,
          value: 20501,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 680,
          value: 21699,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 700,
          value: 24199,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 720,
          value: 21699,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 740,
          value: 20501,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 760,
          value: 21699,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 780,
          value: 21699,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 800,
          value: 21699,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 820,
          value: 21699,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 840,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 860,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 880,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 900,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 920,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 940,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 960,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 980,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1000,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1020,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1040,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1060,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1080,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1100,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1120,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1140,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1160,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1180,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1200,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1220,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1240,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1260,
          value: 18001,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1280,
          value: 18101,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1300,
          value: 18259,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1320,
          value: 18159,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1340,
          value: 18159,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1360,
          value: 159,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1380,
          value: 159,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1400,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        },
        {
          time: 1420,
          value: 1,
          lightingValue: 0,
          activeOccupancy: 0,
          occupancy: 2
        }
      ]
    },
    availabilities: [
      {
        _id: {
          $oid: '5aa86578020c6a1af847ee6a'
        },
        name: 'Worker6_Weekend',
        type: 'AVAILABILITY_WORKER',
        activities: [
          {
            name: 'Wakeup',
            start: {
              $date: '1970-01-01T07:06:55.556Z'
            },
            end: {
              $date: '1970-01-01T07:21:55.556Z'
            },
            type: 'ACTIVITY_WAKUP'
          },
          {
            name: 'Breakfast',
            start: {
              $date: '1970-01-01T07:49:01.491Z'
            },
            end: {
              $date: '1970-01-01T09:04:01.491Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Shower',
            start: {
              $date: '1970-01-01T08:52:13.920Z'
            },
            end: {
              $date: '1970-01-01T21:22:13.920Z'
            },
            type: 'ACTIVITY_MORNING_COURSE'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T09:33:51.799Z'
            },
            end: {
              $date: '1970-01-01T10:48:51.799Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Cleaning',
            start: {
              $date: '1970-01-01T09:56:16.834Z'
            },
            end: {
              $date: '1970-01-01T10:56:16.834Z'
            },
            type: 'ACTIVITY_CLEANING_HOME'
          },
          {
            name: 'Wash Clothes',
            start: {
              $date: '1970-01-01T10:05:58.271Z'
            },
            end: {
              $date: '1970-01-01T11:20:58.271Z'
            },
            type: 'ACTIVITY_WASHCLOTHES'
          },
          {
            name: 'Wash Dishes',
            start: {
              $date: '1970-01-01T12:06:00.756Z'
            },
            end: {
              $date: '1970-01-01T13:21:00.756Z'
            },
            type: 'ACTIVITY_WASHING_DISHES'
          },
          {
            name: 'Go Out',
            start: {
              $date: '1970-01-01T15:07:57.120Z'
            },
            end: {
              $date: '1970-01-01T19:52:57.120Z'
            },
            type: 'ACTIVITY_GOOUT'
          },
          {
            name: 'Watch movie',
            start: {
              $date: '1970-01-01T20:34:36.790Z'
            },
            end: {
              $date: '1970-01-01T22:19:36.790Z'
            },
            type: 'ACTIVITY_WATCHING_MOVIE'
          },
          {
            name: 'Watch TV',
            start: {
              $date: '1970-01-01T20:34:45.294Z'
            },
            end: {
              $date: '1970-01-01T22:19:45.294Z'
            },
            type: 'ACTIVITY_WATCHING_TV'
          },
          {
            name: 'Charge Laptop',
            start: {
              $date: '1970-01-01T20:03:42.958Z'
            },
            end: {
              $date: '1970-01-01T20:48:42.958Z'
            },
            type: 'ACTIVITY_COMPUTING'
          },
          {
            name: 'Sleep',
            start: {
              $date: '1969-12-31T23:23:08.201Z'
            },
            end: {
              $date: '1970-01-01T07:23:08.200Z'
            },
            type: 'ACTIVITY_SLEEP'
          },
          {
            name: 'Heating',
            start: {
              $date: '1969-12-31T23:21:35.580Z'
            },
            end: {
              $date: '1970-01-01T05:51:35.579Z'
            },
            type: 'ACTIVITY_HEATING_VENTILATION'
          }
        ],
        creationDate: {
          $date: '2018-03-14T00:14:27.369Z'
        }
      },
      {
        _id: {
          $oid: '5aa6ac2b020c6a1af847ee5d'
        },
        name: 'Non-Worker 1',
        type: 'AVAILABILITY_NON_WORKER',
        activities: [
          {
            name: 'Wakeup',
            start: {
              $date: '1970-01-01T08:07:04.580Z'
            },
            end: {
              $date: '1970-01-01T08:22:04.580Z'
            },
            type: 'ACTIVITY_WAKUP'
          },
          {
            name: 'Take Shower',
            start: {
              $date: '1970-01-01T08:37:54.017Z'
            },
            end: {
              $date: '1970-01-01T09:07:54.017Z'
            },
            type: 'ACTIVITY_MORNING_COURSE'
          },
          {
            name: 'Get Ready',
            start: {
              $date: '1970-01-01T09:06:58.131Z'
            },
            end: {
              $date: '1970-01-01T09:21:58.131Z'
            },
            type: 'ACTIVITY_GETTING_READY'
          },
          {
            name: 'Cook breakfast',
            start: {
              $date: '1970-01-01T09:37:19.829Z'
            },
            end: {
              $date: '1970-01-01T09:52:19.829Z'
            },
            type: 'ACTIVITY_TOASTING_BREAD'
          },
          {
            name: 'Make Coffee',
            start: {
              $date: '1970-01-01T09:37:41.331Z'
            },
            end: {
              $date: '1970-01-01T09:52:41.331Z'
            },
            type: 'ACTIVITY_COFFEE_MAKING'
          },
          {
            name: 'Cleaning',
            start: {
              $date: '1970-01-01T10:11:17.584Z'
            },
            end: {
              $date: '1970-01-01T11:11:17.584Z'
            },
            type: 'ACTIVITY_CLEANING_HOME'
          },
          {
            name: 'Cooking',
            start: {
              $date: '1970-01-01T10:35:06.887Z'
            },
            end: {
              $date: '1970-01-01T12:50:06.887Z'
            },
            type: 'ACTIVITY_COOKING'
          },
          {
            name: 'Wash Clothes',
            start: {
              $date: '1970-01-01T11:33:23.176Z'
            },
            end: {
              $date: '1970-01-01T12:48:23.176Z'
            },
            type: 'ACTIVITY_WASHCLOTHES'
          }
        ],
        creationDate: {
          $date: '2018-03-12T19:15:20.305Z'
        }
      }
    ],
    appliances: [
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4863'
        },
        name: 'Electric shower',
        type: 'APPLIANCE_ELECTRIC_SHOWER',
        description: 'This is Appliance Electric shower from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Electric shower',
            powerInputOn: 9000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 96608465,
            duration: 3,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b485a'
        },
        name: 'Microwave',
        type: 'APPLIANCE_MICROWAVE',
        description: 'This is Appliance Microwave from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Microwave',
            powerInputOn: 1250,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 27532561,
            duration: 30,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b485f'
        },
        name: 'Washing machine',
        type: 'APPLIANCE_WASHING_MACHINE',
        description: 'This is Appliance Washing machine from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Washing machine',
            powerInputOn: 406,
            powerInputOff: 1,
            restartDelay: 0,
            scaleFactor: 517194989,
            duration: 138,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4856'
        },
        name: 'VCR / DVD',
        type: 'APPLIANCE_DVD_PLAYER',
        description: 'This is Appliance VCR / DVD from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance VCR / DVD',
            powerInputOn: 34,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4854'
        },
        name: 'TV 2',
        type: 'APPLIANCE_TV',
        description: 'This is Appliance TV 2 from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance TV 2',
            powerInputOn: 124,
            powerInputOff: 3,
            restartDelay: 0,
            scaleFactor: 321206669,
            duration: 73,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b484d'
        },
        name: 'Hi-Fi',
        type: 'APPLIANCE_HIFI',
        description: 'This is Appliance Hi-Fi from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Hi-Fi',
            powerInputOn: 100,
            powerInputOff: 9,
            restartDelay: 0,
            scaleFactor: 4666316,
            duration: 60,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4863'
        },
        name: 'Electric shower',
        type: 'APPLIANCE_ELECTRIC_SHOWER',
        description: 'This is Appliance Electric shower from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Electric shower',
            powerInputOn: 9000,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 96608465,
            duration: 3,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b485a'
        },
        name: 'Microwave',
        type: 'APPLIANCE_MICROWAVE',
        description: 'This is Appliance Microwave from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Microwave',
            powerInputOn: 1250,
            powerInputOff: 2,
            restartDelay: 0,
            scaleFactor: 27532561,
            duration: 30,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5a7c8a0d5eee4431180b4860'
        },
        name: 'Washer dryer',
        type: 'APPLIANCE_CLOTHES_DRYER',
        description: 'This is Appliance Washer dryer from import operation.',
        creationDate: {
          $date: '2018-02-08T17:34:05.037Z'
        },
        operationalModes: [
          {
            name: 'Op mode 1',
            description: 'This is an imported operational mode for Appliance Washer dryer',
            powerInputOn: 792,
            powerInputOff: 1,
            restartDelay: 0,
            scaleFactor: 547249401,
            duration: 198,
            leftCycleTime: 0,
            leftRestartDelay: 0
          }
        ]
      },
      {
        _id: {
          $oid: '5aa049b0020c6a0650dd5c08'
        },
        name: 'abcd',
        type: 'APPLIANCE_FRIDGE',
        description: 'sdvsv',
        creationDate: {
          $date: '2018-03-07T20:21:51.501Z'
        },
        operationalModes: [
          {
            name: 'sv',
            description: 'svsv',
            powerInputOn: 1,
            powerInputOff: 0,
            restartDelay: 0,
            scaleFactor: 10,
            loadCurve: {
              name: 'asvsv',
              description: 'svv',
              measurements: [
                {
                  time: 5,
                  value: 5,
                  lightingValue: 0,
                  activeOccupancy: 0,
                  occupancy: 0
                }
              ]
            },
            duration: 30,
            leftCycleTime: 5,
            leftRestartDelay: 5
          }
        ]
      }
    ]
  }
];

@Injectable()
export class ReportService {
  constructor() {}

  getReport() {
    return report;
  }

  getSimulationById(id: string) {
    return report.filter(item => item._id.$oid === id)[0];
  }
}
