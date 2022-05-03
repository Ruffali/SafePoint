$(document).ready(function () {
  const translate = [
    {
      main_text:
        "“Safe Point” is dedicated to helping communities get on with their lives and reclaim their future.",
      button_contact: "Əlaqə",
      button_about: "Haqqımızda",
      info_title: "Biz kimik",
      info_text_01:
        "“Safe Point” icmalara həyatlarını davam etdirməyə və gələcəklərini bərpa etməyə kömək etmək üçün yaradılmışdır. “Safe Point” QSC-nin əsas məqsədi münaqişədən zərər çəkmiş ərazilərdə mina, kaset sursatları və partlamamış bombaların yarada biləcəyi təhlükələri aradan qaldırmaqdır.",
      info_text_02:
        "“Safe Point” minaların aşkarlanmasına, identifikasiyasına və aradan qaldırılmasına, həmçinin partlayıcı sursatların zərərsizləşdirilməsinə fokuslanıb.",
      info_text_03:
        "Əsas məqsədimizə əlavə olaraq, yüksək standartlı xidmətləri təmin etmək üçün işçilərimizin idarəetmə bacarıqlarını daha da inkişaf etdirməyə calışırıq.",
      info_text_04:
        "Qeyd etmək vacibdir ki, ərazilərin minalardan təmizlənməsində etibarlılığını qoruyub saxlamaqda davam edən əl ilə sökülmə üsulu ilə yanaşı, biz həm də müxtəlif sayda müasir avadanlıqlardan istifadə edirik.",
      footer_office: "Ünvan",
      footer_address: "Azərbaycan, AZ1072 Koroğlu Rəhimov 57A, Bakı",
      footer_contact: "Əlaqə",
      copyright: "© 2022. Bütün hüquqlar qorunur “Safe Point” CJSC",
    },
    {
      main_text:
        "“Safe Point” is dedicated to helping communities get on with their lives and reclaim their future.",
      button_contact: "Contact Us",
      button_about: "About Us",
      info_title: "Who </br> We are",
      info_text_01:
        "“Safe Point” CJSC was established with the primary objective to remove the threat of landmines, cluster munitions and unexploded bombs in conflict-affected areas. “Safe Point” is focused on the detection, identification and removal of landmines as well as explosive ordnance disposal (EOD).",
      info_text_02:
        "In addition to our primary objective, “Safe Point” is committed to further developing of managerial skills of our staff in order to fortify and maintain a high standard of services.",
      info_text_03:
        "It is also worth noting that in addition to the high skill of our specialists in manual method of removal, which continues to remain reliable, we can also boast of variety of modern equipment that we use in our work.",
      info_text_04:
        "“Safe Point” is dedicated to helping communities get on with their lives and reclaim their future.",
      footer_office: "Office",
      footer_address: "Azerbaijan, AZ1072 Koroglu Rahimov 57A, Baku",
      footer_contact: "Contacts",
      copyright: "© 2022. All rights reserved. “Safe Point” CJSC",
    },
  ];

  $("#translate").on("change", function () {
    $("#main p").html(translate[this.value].main_text);
    $(".button.colorful").html(translate[this.value].button_about);
    $(".button.contact").html(translate[this.value].button_contact);
    $("#info .title").html(translate[this.value].info_title);
    $("#info .title").html(translate[this.value].info_title);
    $("#info .text01").html(translate[this.value].info_text_01);
    $("#info .text02").html(translate[this.value].info_text_02);
    $("#info .text03").html(translate[this.value].info_text_03);
    $("#info .text04").html(translate[this.value].info_text_04);
    $("#footer .office").html(translate[this.value].footer_office);
    $("#footer .info").html(translate[this.value].footer_address);
    $("#footer .contact").html(translate[this.value].footer_contact);
    $("#footer .copyright").html(translate[this.value].copyright);
  });
});
