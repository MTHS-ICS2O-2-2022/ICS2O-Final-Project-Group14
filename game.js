/* global Phaser
// Copyright (c) 2023 Olivia B-R All rights reserved //
// Created by: Olivia B-R
// Created on: April 2023
// This is the Phaser 3 game configuration file
/**
* Start Phaser Game.
*/
const config = { 
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: "arcade",
        arcade: {
        debug: true,
        },
    },

    
    backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    }

    const game = new Phaser.Game (config)
    console.log(game)