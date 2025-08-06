<!DOCTYPE html>
<html lang="en">
<head>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<style>
    /*https://stackoverflow.com/questions/6370690/media-queries-how-to-target-desktop-tablet-and-mobile*/
    @media only screen and (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
        td.grid-cell {
            width: 20px;
            height: 20px;
        }

        .new-game{
            height: 20px;
            width: 100px;
        }
        .open-instructions{
            height: 20px;
            width: 150px;
        }
        .give-up-button{
            height: 20px;
            width: 100px;
        }
        .modal {
            padding-top: 10px; /* Location of the box */
        }
        .modal-content {
            padding: 20px;
            font-size: 12px;
        }
    }
    @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
    @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */
        td.grid-cell {
            width: 40px;
            height: 40px;
        }
        .new-game{
            height: 20px;
            width: 100px;
        }
        .open-instructions{
            height: 20px;
            width: 150px;
        }
        .give-up-button{
            height: 20px;
            width: 100px;
        }
        .modal-content {
            padding: 20px;
            width: 700px;
        }
    }

    table{
        table-layout: fixed;
        text-align: center;
    }
    table.guess{
        border-spacing: 10px;
    }
    td{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .word-index {
        font-size: 10px;
        color: #666;
        position: absolute;
        top: 0;
        left: 0;
    }
    .grid-notUsed {
        background-color: #ccc;
    }
    table.game-table {
        border-collapse: collapse;
        margin: auto;
        border: 1px solid black;
        display: inline-block;
        vertical-align: top;
    }
    #crossword-hint-horizontal {
        display: inline-block;
        vertical-align: top;
        width: 200px;
        word-wrap: break-word;
    }
    #crossword-hint-vertical {
        display: inline-block;
        vertical-align: top;
        width: 200px;
        word-wrap: break-word;
    }
    .container {
        display: inline-block;
        width: 100%;
    }


    td.grid-cell {
        border: 1px solid black;
        position: relative;
    }

    .new-game{
        outline: thin solid black;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: grey;
        color: white;
    }
    .open-instructions{
        outline: thin solid black;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: grey;
        color: white;
    }
    .give-up-button{
        outline: thin solid black;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: grey;
        color: white;
    }

    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
    }

    /* The Close Button */
    .modal-close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .modal-close:hover,
    .modal-close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
</style>
<script src="CrossWordGame.js"></script>
<script> 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var key_event = -1;
var gameState=0; //0 Over, 1 InProgress, 2 lock input
var targetWord;
var grid = new Array(15).fill(null).map(() => new Array(15).fill(null));
 
$(document).ready(function(){
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (65 <= evt.keyCode && evt.keyCode <=90) {
            key_event = evt.keyCode
        }
        if (8 == evt.keyCode) {//backspace
            key_event = 8
        }
        if (13 == evt.keyCode) {//enter key
            key_event = 13
        }
        //console.log(key_event)
    };

    var gameOverWin = function(){
        gameState=0
        alert('Next Round!')
        //Yes No then startGame()
    }
   
    var gameLoop = function(){
        if (65 <= key_event && key_event <= 90){
            alphabet_letter_input(String.fromCharCode(key_event))
        }
        else if (8 == key_event) {//backspace
            deleteLetter()
        }
        else if (13 == key_event) {//enter key
            submit()
        }
        //console.log('Game running')
        key_event=-1

        setTimeout(gameLoop, 20);
    }
 
    $(".new-game").click(function(){
        startGame()
    })
    
    $('.give-up-button').click(function() {
        console.log('giveUpButton')
        giveUpGrid();
    });
 
    $(".submit").click(function(){
        submit()
    });
 

    var open_instructions = function(){
        $('#instructions').show()
    }

    $(".modal-close").click(function(){
        console.log('hideclose')
        $('#instructions').hide()
    });
    $(".modal-content").click(function(e){
        e.stopPropagation();
    })
    $(".modal").click(function(){
        console.log('hidenmodal')
        $('#instructions').hide()
    });
    $(".open-instructions").click(function(){
        open_instructions()
    });

    startGame()

    //Instructions Open
    open_instructions()

    gameLoop()
});
 
</script>
    <center>
        <a href="https://www.joshho.com/blog/2025/08/05/from-zero-to-crossword-generator-with-windsurf-ai/" target="_blank">Blog Post</a>
        <br/><br/>
        <div class='new-game'>New Game</div><div class='open-instructions'>Open Instructions</div><br/><div class='give-up-button'>Answers</div><br/>
        <div class="container">
        <div id="crossword-hint-horizontal"></div>
        <table id="game-table" class="game-table">
        <tbody>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
            <tr>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
                <td class="grid-cell"><span class="word-index"></span><span class="letter"></span></td>
            </tr>
        </tbody>
        </table>
        <div id="crossword-hint-vertical"></div>
        </div>
        </center>
        <div id="instructions" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          
          <hr/>
          <b>Click "New Game" for a new word</b>
        </div>
      </div>
    </body>
</html>
