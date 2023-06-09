/* global Phaser*/
// Copyright (c) 2023 Olivia B-R All rights reserved //
// Created by: Olivia B-R
// Created on: April 2023
// This is the game js file


//scene import statements 
import SpashScene from './splashScene.js'
import titleScene from './titleScene.js'

// create the new scenes
const splashScene = new SpashScene()
const titleScene = new TitleScene()

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

    // set background color
    backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        // we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    }

    const game = new Phaser.Game (config)
    console.log(game)

    // load scenes
    game.scene.add("splashScene", splashScene)
    game.scene.add("titleScene", titleScene)

    // the start scene
    game.scene.start("splashScene")
