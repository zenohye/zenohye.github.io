document.getElementById("generate-message-btn").addEventListener("click", function() {
	document.getElementById("message").style.display = "block";
	var messages = [
          "Wanting was enough. For me, it was enough. To live for the hope of it all. - august",
          "Touching him was like realizing all you ever wanted was right there in front of you. - Red",
          "I like shiny things, but I'd marry you with paper rings. - Paper Rings",
          "What doesn't kill me makes me want you more. - Cruel Summer",
          "I have loved you since we were 18. - 18",
          "Darling you look perfect tonight. - Perfect",
          "If I went and hurt my body. Baby, would you love me the same? - Line Without A Hook",
          "Araw-araw kong dala-dala paboritong panalangin ko'y makasama ka sa pagtanda. - Pasilyo",
          "Sa'yo lang sa'yo lang ako uuwi. - Tahanan",
          "I don't care how long it takes. As long as I'm with you I've got a smile on my face. - Here with Me",
          "Don't want to leave you anymore. - Cars Outside",
          "Baby I'm perfect for you. - Perfect",
          "Nakatanim pa din ang gumamelang binalik mo sa'kin nang tayo'y naghiwalay. - Beer",
          "Don't you know that I am right here? - Sattelite",
          "I was enchanted to meet you. - Enchanted",
          "I'll never walk Cornelia Street again. - Cornelia Street",
        ];
        var randomIndex = Math.floor(Math.random() * messages.length);
        document.getElementById("message").innerHTML = messages[randomIndex];
      });