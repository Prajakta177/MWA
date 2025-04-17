<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neon Hackathon Animation</title>
    <style>
        body {
            background-color: black;
            overflow: hidden;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .text {
            position: absolute;
            top: -100px;
            font-size: 50px;
            font-weight: bold;
            color: #0ff;
            text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
            animation: drop 2s ease-out forwards, glow 1.5s infinite alternate;
        }
        
        @keyframes drop {
            0% {
                top: -100px;
            }
            100% {
                top: 50%;
                transform: translateY(-50%);
            }
        }
        
        @keyframes glow {
            0% {
                text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
            }
            100% {
                text-shadow: 0 0 15px #0ff, 0 0 30px #0ff, 0 0 45px #0ff;
            }
        }
    </style>
</head>
<body>
    <div class="text">24-Hour Hackathon</div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            let text = document.querySelector(".text");
            text.style.animation = "drop 2s ease-out forwards, glow 1.5s infinite alternate";
        });
    </script>
</body>
</html>
