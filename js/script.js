{
    const playGame = function(playerInput){
        clearMessages();

        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            } else if(argMoveId == 2){
                return 'papier';
            } else if(argMoveId == 3){
                return 'nożyce';
            } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
            }
        }

        const displayResult = function(argComputerMove, argPlayerMove){
            if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                return 'Ty wygrywasz';
            }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                return 'Ty wygrywasz';
            }else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                return 'Ty wygrywasz';
            }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                return 'Przegrywasz!';
            }else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                return 'Przegrywasz!';
            }else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                return 'Przegrywasz!';
            }else {
                return 'Jest remis!';
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + computerMove);

        console.log('Gracz wpisał: ' + playerInput);
        const playerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + playerMove);

        const resultGame = displayResult(computerMove, playerMove);
        printMessage(resultGame);
        
    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    });
}


