let firstname = (lastname = phone = email = address = objective = workExpYear = workExpMonth = workDesc = ssc = sscSchool = hsc = hscSchool = be = beColleage = skills =
  "");
var id = 0;

fetchDetails();
fetchTemplate(id);

// fetch template data
function fetchTemplate(fetchId, fadeElement = null) {
  if (fetchId == 1 && fadeElement) {
    $(`#${fadeElement}`).fadeIn("slow");
  } else {
    $("#edit").hide();
    $("#download").hide();
  }
}

// fetch resume details
function fetchDetails() {
  $("[name=firstname]").attr(
    "value",
    `${
      sessionStorage.getItem("firstname")
        ? sessionStorage.getItem("firstname")
        : ""
    }`
  );

  $("[name=lastname]").attr(
    "value",
    `${
      sessionStorage.getItem("lastname")
        ? sessionStorage.getItem("lastname")
        : ""
    }`
  );

  $("[name=phone]").attr(
    "value",
    `${sessionStorage.getItem("phone") ? sessionStorage.getItem("phone") : ""}`
  );

  $("[name=email]").attr(
    "value",
    `${sessionStorage.getItem("email") ? sessionStorage.getItem("email") : ""}`
  );

  $("[name=address]").text(
    `${
      sessionStorage.getItem("address") ? sessionStorage.getItem("address") : ""
    }`
  );

  $("[name=objective]").text(
    `${
      sessionStorage.getItem("objective")
        ? sessionStorage.getItem("objective")
        : ""
    }`
  );

  $("[name=workExpYear]").attr(
    "value",
    `${
      sessionStorage.getItem("workExpYear")
        ? sessionStorage.getItem("workExpYear")
        : ""
    }`
  );
  $("[name=workExpMonth]").attr(
    "value",
    `${
      sessionStorage.getItem("workExpMonth")
        ? sessionStorage.getItem("workExpMonth")
        : ""
    }`
  );
  $("[name=workDesc]").text(
    `${
      sessionStorage.getItem("workDesc")
        ? sessionStorage.getItem("workDesc")
        : ""
    }`
  );
  $("[name=ssc]").attr(
    "value",
    `${sessionStorage.getItem("ssc") ? sessionStorage.getItem("ssc") : ""}`
  );
  $("[name=sscSchool]").attr(
    "value",
    `${
      sessionStorage.getItem("sscSchool")
        ? sessionStorage.getItem("sscSchool")
        : ""
    }`
  );
  $("[name=hsc]").attr(
    "value",
    `${sessionStorage.getItem("hsc") ? sessionStorage.getItem("hsc") : ""}`
  );
  $("[name=hscSchool]").attr(
    "value",
    `${
      sessionStorage.getItem("hscSchool")
        ? sessionStorage.getItem("hscSchool")
        : ""
    }`
  );
  $("[name=be]").attr(
    "value",
    `${sessionStorage.getItem("be") ? sessionStorage.getItem("be") : ""}`
  );
  $("[name=beColleage]").attr(
    "value",
    `${
      sessionStorage.getItem("beColleage")
        ? sessionStorage.getItem("beColleage")
        : ""
    }`
  );
  $("[name=skills]").text(
    `${
      sessionStorage.getItem("skills") ? sessionStorage.getItem("skills") : ""
    }`
  );
}

function resumeDetails() {
  firstname = $("#firstname").val();
  lastname = $("#lastname").val();
  phone = $("#phone").val();
  email = $("#email").val();
  address = $("#address").val();
  objective = $("#objective").val();
  workExpYear = $("#workExpYear").val();
  workExpMonth = $("#workExpMonth").val();
  workDesc = $("#workDesc").val();
  ssc = $("#ssc").val();
  sscSchool = $("#sscSchool").val();
  hsc = $("#hsc").val();
  hscSchool = $("#hscSchool").val();
  be = $("#be").val();
  beColleage = $("#beColleage").val();
  skills = $("#skills").val();

  // store resume details

  sessionStorage.setItem("firstname", firstname);
  sessionStorage.setItem("lastname", lastname);
  sessionStorage.setItem("phone", phone);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("address", address);
  sessionStorage.setItem("objective", objective);
  sessionStorage.setItem("workExpYear", workExpYear);
  sessionStorage.setItem("workExpMonth", workExpMonth);
  sessionStorage.setItem("workDesc", workDesc);
  sessionStorage.setItem("ssc", ssc);
  sessionStorage.setItem("sscSchool", sscSchool);
  sessionStorage.setItem("hsc", hsc);
  sessionStorage.setItem("hscSchool", hscSchool);
  sessionStorage.setItem("be", be);
  sessionStorage.setItem("beColleage", beColleage);
  sessionStorage.setItem("skills", skills);
}

$("#about").hide();

$(".check").addClass("primary").children().css({ color: "#fff" });

$(function () {
  $("#header").on("click", "a", function () {
    if ($(this).attr("href") == "#templates") {
      $("#about").hide();
      $("#templates").fadeIn("slow");
    }
    if ($(this).attr("href") == "#about") {
      $("#templates").hide();
      $("#about").fadeIn("slow");
    }
  });
  $(".check").on("click", function () {
    $(this).parent().next().children().removeClass("level");
    $(this)
      .removeClass("level")
      .parent()
      .nextAll()
      .children()
      .removeClass("primary");

    $(this).parent().nextAll().find("i").css({ color: "#ccc" });

    $("#template-content").fadeIn("slow");
    $("#edit").hide();
    $("#download").hide();
    $(this).addClass("primary");
  });

  $(".edit").on("click", function () {
    $(this)
      .removeClass("level")
      .parent()
      .next()
      .children()
      .removeClass("primary")
      .children()
      .css({ color: "#ccc" });
    $(this).parent().prev().children().addClass("level");
    $("#template-content").hide();

    // $("#edit").fadeIn("slow");
    fetchTemplate(id, "edit");
    $("#download").hide();

    $(this).addClass("primary");
    $(this).children().css("color", "white");
  });

  $(".download").on("click", function () {
    resumeDetails();
    fetchDetails();
    $("#template-content").hide();

    // $("#download").fadeIn("slow");
    fetchTemplate(id, "download");
    $("#edit").hide();
    $(this)
      .parent()
      .prev()
      .children()
      .addClass("primary")
      .children()
      .css({ color: "#fff" });
    $(this).parent().prevAll().children().addClass("level");
    $(this).addClass("primary");
    $(this).children().css("color", "white");
  });

  $("#templates__images").on("click", "div.col", function () {
    id = $(this).data("id");
    if ($(this).is(".select")) {
      id = 0;
      $(this).removeClass("select");
    } else {
      $("#templates__images div.col").each(function (index, element) {
        console.log("remove all class");
        $(this).removeClass("select");
        console.log($(this));
      });
      $(this).addClass("select");
    }
  });
});
