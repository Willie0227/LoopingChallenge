//challenge 1

for (i = 0; i < 5; i++) {
    document.write("I love homework<br>")
}

//challenge 2

document.write("<br>")

for (i = 0; i < 5; i++) {
    document.write(i + "<br>")
}


//challenge 2
document.write("<br>")

for (i = 15; i <= 30; i += 3) {
    document.write(i + "<br>")
}
//challenge 4

document.write("<br>")

for (i = 0; i < 4; i++) {

    for (j = 0; j < 4; j++) {
        document.write("⬜" + " ")
    }
    document.write("<br>")
}
//challenge 5

document.write("<br>")

for (i = 0; i < 7; i++) {

    for (j = 0; j < i + 1; j++) {
        document.write("🦴")
    }
    document.write("<br>")
}
//challenge 6
document.write("<br>")


for (i = 6; i >=0; i--) {

    for (k = 0; k <i; k++) {
        document.write("~")
    }

    for (j = 8; j > i + 1; j--) {
        document.write("🦴")
    }

    document.write("<br>")
}
//challenge 7
document.write("<br>")


for (a = 0; a<6; a++) {
    for (i = 0; i < a; i++) {
        for (j = 0; j < i + 1; j++) {
            document.write("🦴")
        }
        document.write("<br>")
    }
    document.write("<br>")


}
