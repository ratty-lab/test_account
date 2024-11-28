import express from 'express';





const app= express();

var counter=0;
    
    
    
app.get('/',(req,res)=>{
    for(let i=0;i<=2354545456;i++){
        counter++
    }


    res.send(`
        process id is ${process.pid}  and counter:${counter}
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Load Test: Image and Video Overloading</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .content {
            display: flex;
            flex-wrap: wrap;
        }

        .item {
            margin: 10px;
            width: 200px;
            height: 200px;
        }

        img, video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .item img {
            background-color: lightgray;
        }

        .item video {
            background-color: black;
        }

        .loading {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 24px;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Simulating Load: Image and Video Overloading</h1>
    <div class="loading">Loading... Please wait!</div>

    <div class="content">
        <!-- Multiple image and video elements for load testing -->
        <!-- Replacing img src with provided image URL -->
        <div class="item"><img src="https://wallpaperaccess.com/full/31201.jpg" alt="Image"></div>
        <div class="item"><img src="https://wallpaperaccess.com/full/31201.jpg" alt="Image"></div>
        <div class="item"><img src="https://wallpaperaccess.com/full/31201.jpg" alt="Image"></div>
        <div class="item"><img src="https://wallpaperaccess.com/full/31201.jpg" alt="Image"></div>
        <div class="item"><img src="https://wallpaperaccess.com/full/31201.jpg" alt="Image"></div>
        <div class="item"><img src="https://wallpaperaccess.com/full/31201.jpg" alt="Image"></div>
        <div class="item"><img src="https://wallpaperaccess.com/full/31201.jpg" alt="Image"></div>
        <div class="item"><img src="https://wallpaperaccess.com/full/31201.jpg" alt="Image"></div>

        <!-- Video elements with actual video URLs -->
        <div class="item"><video src="https://www.w3schools.com/html/movie.mp4" controls></video></div>
        <div class="item"><video src="https://www.w3schools.com/html/movie.mp4" controls></video></div>
        <div class="item"><video src="https://www.w3schools.com/html/movie.mp4" controls></video></div>
        <div class="item"><video src="https://www.w3schools.com/html/movie.mp4" controls></video></div>
    </div>

    <script>
        // Optionally, you can keep the loading indicator while content is being fetched
        window.onload = function() {
            document.querySelector('.loading').style.display = 'none';
        }
    </script>
</body>
</html>

    `)

    })
    app.get('/nb',(req,res)=>{
        res.send(`process is ${process.pid} and counter:${counter}`)
    })


app.listen(3000,()=>{
    console.log('server is running at port 3000');
    
}
)