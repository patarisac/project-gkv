const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [875, 1000]
};

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        // Membuat Judul Visualisasi
        context.save();
        context.translate(875 / 2, 50);
        context.textAlign = "center";
        context.font = "bold 40px Serif"
        context.fillStyle = "black"
        context.fillText("World Happiness Report 2022", 0, 0);
        context.restore();

        var posx = 50;
        var posy = 200;
        var jarak = 50;
        var lebar;

        // Garis atas
        context.beginPath();
        context.moveTo(posx, posy);
        context.lineTo(posx + 65 * 12, posy);
        context.lineTo(posx + 65 * 12, posy - 3);
        context.lineTo(posx, posy - 3);
        context.fillStyle = "lightskyblue";
        context.closePath();
        context.fill();

        // Sumbu y
        var nil = 10;
        for (var i = 0; i < 6; i++) {
            if (i % 2 == 1) lebar = 3;
            else lebar = 5;
            context.beginPath();
            context.moveTo(posx, posy);
            context.lineTo(posx, posy + jarak);
            context.lineTo(posx + lebar, posy + jarak);
            context.lineTo(posx + lebar, posy);
            context.fillStyle = "lightskyblue";
            context.closePath();
            context.fill();
            posy = posy + jarak;
            context.save();

            // Membuat nilai pada sumbu y

            context.translate(posx - 10, posy);

            context.textAlign = "center";
            context.font = "15px Arial"
            context.fillStyle = "grey"
            context.fillText(nil.toString(), 0, 0);
            nil = nil - 2;
            context.restore();

        }

        // Sumbu x
        jarak = 65;
        nil = 1;
        lebar = 3;
        for (var i = 0; i < 12; i++) {
            context.beginPath();
            context.moveTo(posx, posy);
            context.lineTo(posx + jarak, posy);
            context.lineTo(posx + jarak, posy + lebar);
            context.lineTo(posx, posy + lebar);
            context.fillStyle = "lightskyblue";
            context.closePath();
            context.fill();
            posx = posx + jarak;
        }

        // Garis kanan
        jarak = 50;
        for (var i = 0; i < 6; i++) {
            if (i % 2 == 0) lebar = 3;
            else lebar = 5;
            context.beginPath();
            context.moveTo(posx, posy);
            context.lineTo(posx, posy - jarak);
            context.lineTo(posx - lebar, posy - jarak);
            context.lineTo(posx - lebar, posy);
            context.fillStyle = "lightskyblue";
            context.closePath();
            context.fill();
            posy = posy - jarak;
        }

        // Membuat judul chart
        context.save();
        context.translate(875 / 2, 170);
        context.textAlign = "center";
        context.font = "25px Arial"
        context.fillStyle = "black"
        context.fillText("TOP 10 HIGHEST HAPPINESS SCORE", 0, 0);
        context.restore();


        /* ==================================================================================== */

        posx = 50;
        posy = 600;
        jarak = 50;

        // Garis atas
        context.beginPath();
        context.moveTo(posx, posy);
        context.lineTo(posx + 65 * 12, posy);
        context.lineTo(posx + 65 * 12, posy - 3);
        context.lineTo(posx, posy - 3);
        context.fillStyle = "lightskyblue";
        context.closePath();
        context.fill();

        // Sumbu y
        nil = 10;
        for (var i = 0; i < 6; i++) {
            if (i % 2 == 1) lebar = 3;
            else lebar = 5;
            context.beginPath();
            context.moveTo(posx, posy);
            context.lineTo(posx, posy + jarak);
            context.lineTo(posx + lebar, posy + jarak);
            context.lineTo(posx + lebar, posy);
            context.fillStyle = "lightskyblue";
            context.closePath();
            context.fill();
            posy = posy + jarak;
            context.save();

            // Membuat nilai pada sumbu y

            context.translate(posx - 10, posy);

            context.textAlign = "center";
            context.font = "15px Arial"
            context.fillStyle = "grey"
            context.fillText(nil.toString(), 0, 0);
            nil = nil - 2;
            context.restore();

        }

        // Sumbu x
        jarak = 65;
        nil = 1;
        lebar = 3;
        for (var i = 0; i < 12; i++) {
            context.beginPath();
            context.moveTo(posx, posy);
            context.lineTo(posx + jarak, posy);
            context.lineTo(posx + jarak, posy + lebar);
            context.lineTo(posx, posy + lebar);
            context.fillStyle = "lightskyblue";
            context.closePath();
            context.fill();
            posx = posx + jarak;
        }

        // Garis kanan
        jarak = 50;
        for (var i = 0; i < 6; i++) {
            if (i % 2 == 0) lebar = 3;
            else lebar = 5;
            context.beginPath();
            context.moveTo(posx, posy);
            context.lineTo(posx, posy - jarak);
            context.lineTo(posx - lebar, posy - jarak);
            context.lineTo(posx - lebar, posy);
            context.fillStyle = "lightskyblue";
            context.closePath();
            context.fill();
            posy = posy - jarak;
        }

        // Membuat judul chart
        context.save();
        context.translate(875 / 2, 570);
        context.textAlign = "center";
        context.font = "25px Arial"
        context.fillStyle = "black"
        context.fillText("TOP 10 LOWEST HAPPINESS SCORE", 0, 0);
        context.restore();

        /* ==================================================================================== */

        // Membuat tombol input file
        const input = document.createElement("input");
        input.type = "file";
        document.body.appendChild(input);

        input.addEventListener('change', function (e) {

            // Membaca input file
            var reader = new FileReader();
            reader.onload = function () {

                // Mengubah data menjadi matriks 2D
                const data = reader.result.split('\n').map(function (line) {
                    return line.split(',')
                })
                console.log(data[data.length - 2][2])

                /* Menampilkan isi chart Top 10 Highest Happiness Score */
                var lebar = 60;
                var posAwalX = 72.5;
                var posAwalY = 50 * 10;

                for (var i = 1; i <= 10; i++) {
                    var tinggi = -25 * data[i][2];

                    context.save();
                    if (data[i][2] > 7) {
                        context.fillStyle = "rgb(232, 122, 0)";
                    } else if (data[i][2] > 5) {
                        context.fillStyle = "rgb(255, 154, 42)";
                    } else if (data[i][2] > 3) {
                        context.fillStyle = "rgb(255, 205, 126)";
                    } else if (data[i][2] > 1) {
                        context.fillStyle = "rgb(251, 225, 183)";
                    } else {
                        context.fillStyle = "rgb(225, 249, 239)";
                    }
                    context.beginPath();
                    context.moveTo(posAwalX, posAwalY);
                    context.lineTo(posAwalX, posAwalY + tinggi);
                    context.lineTo(posAwalX + lebar, posAwalY + tinggi);
                    context.lineTo(posAwalX + lebar, posAwalY);
                    context.closePath();
                    context.fill();

                    context.save();
                    var namaNegara = data[i][1];
                    context.translate(posAwalX + lebar / 2, posAwalY + 15);
                    context.textAlign = "center";
                    context.font = "12px Arial"
                    context.fillStyle = "grey"
                    context.fillText(namaNegara, 0, 0);
                    context.restore();

                    context.save();
                    var nil = data[i][2];
                    context.translate(posAwalX + lebar / 2, posAwalY + tinggi - 10);
                    context.textAlign = "center";
                    context.font = "15px Arial"
                    context.fillStyle = "grey"
                    context.fillText(nil.toString(), 0, 0);
                    context.restore();

                    posAwalX = posAwalX + lebar + 15;
                }

                /* ================================================================================= */
                /* Menampilkan isi chart Top 10 Lowest Happiness Score */
                lebar = 60;
                posAwalX = 72.5;
                posAwalY = 900;

                for (var i = data.length - 2; i >= data.length - 11; i--) {
                    var tinggi = -25 * data[i][2];

                    context.save();
                    if (data[i][2] > 7) {
                        context.fillStyle = "rgb(232, 122, 0)";
                    } else if (data[i][2] > 5) {
                        context.fillStyle = "rgb(255, 154, 42)";
                    } else if (data[i][2] > 3) {
                        context.fillStyle = "rgb(255, 205, 126)";
                    } else if (data[i][2] > 1) {
                        context.fillStyle = "rgb(251, 225, 183)";
                    } else {
                        context.fillStyle = "rgb(225, 249, 239)";
                    }

                    context.beginPath();
                    context.moveTo(posAwalX, posAwalY);
                    context.lineTo(posAwalX, posAwalY + tinggi);
                    context.lineTo(posAwalX + lebar, posAwalY + tinggi);
                    context.lineTo(posAwalX + lebar, posAwalY);
                    context.closePath();
                    context.fill();

                    context.save();
                    var namaNegara = data[i][1];
                    context.translate(posAwalX + lebar / 2, posAwalY + 15);
                    context.textAlign = "center";
                    context.font = "12px Arial"
                    context.fillStyle = "grey"
                    context.fillText(namaNegara, 0, 0);
                    context.restore();

                    context.save();
                    var nil = data[i][2];
                    context.translate(posAwalX + lebar / 2, posAwalY + tinggi - 10);
                    context.textAlign = "center";
                    context.font = "15px Arial"
                    context.fillStyle = "grey"
                    context.fillText(nil.toString(), 0, 0);
                    context.restore();

                    posAwalX = posAwalX + lebar + 15;
                }
            }
            reader.readAsText(input.files[0]);

        }, false)

    };
};

canvasSketch(sketch, settings);