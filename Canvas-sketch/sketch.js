const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [8750, 4000]
};

const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        // Sumbu y
        var posx = 500;
        var posy = 500;
        var jarak = 500;
        var lebar;
        var nil = 10;
        for (var i = 0; i < 6; i++) {
            if (i % 2 == 1) lebar = 30;
            else lebar = 50;
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

            context.translate(posx - 100, posy);

            context.textAlign = "center";
            context.font = "150px Arial"
            context.fillStyle = "grey"
            context.fillText(nil.toString(), 0, 0);
            nil = nil - 2;
            context.restore();

        }

        // Sumbu x
        jarak = 650;
        nil = 1;
        lebar = 30;
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
        jarak = 500;
        for (var i = 0; i < 6; i++) {
            if (i % 2 == 0) lebar = 30;
            else lebar = 50;
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

        // Garis atas
        context.beginPath();
        context.moveTo(500, 500);
        context.lineTo(500 + 650 * 12, 500);
        context.lineTo(500 + 650 * 12, 500 - 30);
        context.lineTo(500, 500 - 30);
        context.fillStyle = "lightskyblue";
        context.closePath();
        context.fill();

        // Membuat judul chart
        context.save();
        context.translate(-650 + (650 * 9) / 2, 40 * 8 + 400);
        context.textAlign = "center";
        context.font = "250px Arial"
        context.fillStyle = "lightskyblue"
        context.fillText("TOP 10 HAPPINESS WORLD", 0, 0);
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
                console.log(data[1][2])


                var lebar = 600;
                var posAwalX = 725;
                var posAwalY = 500 * 7;

                for (var i = 1; i <= 10; i++) {
                    var tinggi = -250 * data[i][2];

                    context.save();
                    context.fillStyle = "rgba(255,22,148,.7)";
                    context.beginPath();
                    context.moveTo(posAwalX, posAwalY);
                    context.lineTo(posAwalX, posAwalY + tinggi);
                    context.lineTo(posAwalX + lebar, posAwalY + tinggi);
                    context.lineTo(posAwalX + lebar, posAwalY);
                    context.closePath();
                    context.fill();

                    context.save();
                    var namaNegara = data[i][1];
                    context.translate(posAwalX + lebar / 2, posAwalY + 150);
                    context.textAlign = "center";
                    context.font = "120px Arial"
                    context.fillStyle = "grey"
                    context.fillText(namaNegara, 0, 0);
                    context.restore();

                    context.save();
                    var nil = data[i][2];
                    context.translate(posAwalX + lebar / 2, posAwalY + tinggi - 100);
                    context.textAlign = "center";
                    context.font = "150px Arial"
                    context.fillStyle = "grey"
                    context.fillText(nil.toString(), 0, 0);
                    context.restore();

                    posAwalX = posAwalX + lebar + 150;
                }

            }
            reader.readAsText(input.files[0]);

        }, false)

    };
};

canvasSketch(sketch, settings);