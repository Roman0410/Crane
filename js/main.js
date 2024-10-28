// Fancybox.bind("[data-fancybox]", {
//   Thumbs: false,
// });

$(".burger-menu").click(function () {
  $(this).toggleClass("active");
  $(".header-nav").toggleClass("active");
  $("body").toggleClass("lock");
});
if ($(window).width() < 1024) {
  $(".nav-item").click(function () {
    $(this).find(".sub-menu").slideToggle();
    $(this).find("svg").toggleClass("rotate");
  });
}

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 200) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});

function sortTable(table, columnIndex) {
  const tableBody = $(table).find("tbody");
  const rows = tableBody.find("tr").toArray();
  const direction = tableBody.data("sort-direction") === "asc" ? "desc" : "asc";
  tableBody.data("sort-direction", direction);

  const sortedRows = rows.sort((a, b) => {
    const aText = $(a).children("td").eq(columnIndex).text().trim();
    const bText = $(b).children("td").eq(columnIndex).text().trim();

    return direction === "asc" ? aText.localeCompare(bText, undefined, { numeric: true }) : bText.localeCompare(aText, undefined, { numeric: true });
  });

  tableBody.append(sortedRows);
}

$(document).ready(function () {
  $(".sortable-table th").on("click", function () {
    $(".sortable-table th").removeClass("active");
    $(this).addClass("active");
    const table = $(this).closest("table");
    const columnIndex = $(this).index();
    sortTable(table, columnIndex);
  });
});

//-----------------------SLIDERS-----------------------//

if ($(window).width() <= 768) {
  $(".industries__list").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}
$(".cranes-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $(".cranes-types").find(".prev"),
  nextArrow: $(".cranes-types").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".related-list").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".relared").find(".prev"),
  nextArrow: $(".relared").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".eduSol-img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".eduSol").find(".prev"),
  nextArrow: $(".eduSol").find(".next"),
});

$(document).ready(function () {
  const filters = $(".filter-item");
  const content = $(".content");

  filters.on("click", function () {
    const target = $(this).data("filter");

    filters.removeClass("active");
    $(this).addClass("active");

    content.each(function () {
      const content = $(this);
      if (content.data("content") === target) {
        content.addClass("active");
      } else {
        content.removeClass("active");
      }
    });
  });
});

$(document).ready(function () {
  var $phoneInput = $("#tel, .tel");
  var $myForm = $("#myForm");

  $phoneInput.on("input", function (e) {
    var x = e.target.value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});

$(document).ready(function () {
  $(".select-wrapper").on("click", function () {
    var $selectItems = $(this).siblings(".select-items");
    var $selectSelected = $(this).children(".select-selected");
    $(this).toggleClass("active");
    $selectSelected.toggleClass("active");
    $selectItems.toggleClass("select-hide");
  });

  $(".select-item").on("click", function () {
    var selectedText = $(this).text();
    var selectedValue = $(this).data("value");

    $(this).closest(".custom-select").find(".select-selected").text(selectedText);
    $(this).closest(".custom-select").find("#customSelect").val(selectedValue);

    $(".select-items").addClass("select-hide");
    $(".select-selected").removeClass("active");
    $(".select-selected").css("color", "#000");
    $(".select-wrapper").removeClass("active");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".custom-select").length) {
      $(".select-items").addClass("select-hide");
      $(".select-selected").removeClass("active");
    }
  });
});

const validation = new JustValidate("#main-form");
validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField(".phoneInput", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
