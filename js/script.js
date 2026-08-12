/* =========================================================
   REWEAR — MAIN JAVASCRIPT
   SIERA Showcase 2026
========================================================= */


/* =========================================================
01. PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 900);

});


/* =========================================================
02. NAVBAR
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================================
03. SMOOTH SCROLL
========================================================= */

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
04. SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================================
   ONE PIECE. MANY WAYS.
   SIERRA SHOWCASE
========================================================= */


/* =========================================
   CLOTHING DATA
========================================= */

const clothingData = {

    /* =====================================
      SHIRT
    ===================================== */

    shirt: {

        name: "THE SHIRT",

        styles: {

            minimal: {
                label: "MINIMAL",

                title: "Effortless Minimal",

                description:
                    "Keep the silhouette clean with tailored trousers and simple accessories. Perfect for a polished everyday look.",

                tip:
                    "Keep the colours neutral and let the silhouette do the talking.",

                image:
                    "images/white-shirt-minimal.jpg"
            },

            street: {
                label: "STREET",

                title: "Off-Duty Street",

                description:
                    "Give the classic shirt an edge with relaxed denim, sneakers and statement accessories.",

                tip:
                    "Don't be afraid of oversized proportions. Balance the volume with confident accessories.",

                image:
                    "images/white-shirt-street.jpg"
            },

            feminine: {
                label: "FEMININE",

                title: "Soft & Feminine",

                description:
                    "Balance the structured shirt with a fitted skirt, delicate accessories and softer details.",

                tip:
                    "Mix structured pieces with softer textures to create contrast.",

                image:
                    "images/white-shirt-feminine.jpg"
            },

            smart: {
                label: "SMART",

                title: "Polished & Smart",

                description:
                    "Pair it with tailored trousers and structured layers for a sophisticated look that works anywhere.",

                tip:
                    "Add one structured piece to instantly make a relaxed shirt feel more refined.",

                image:
                    "images/white-shirt-smart.jpg"
            }

        }

    },


    /* =====================================
       BASIC TEE
    ===================================== */

    tee: {

        name: "THE BASIC TEE",

        styles: {

            casual: {
                label: "CASUAL",

                title: "Everyday Ease",

                description:
                    "Keep it effortless with relaxed denim, sneakers and minimal accessories. Simple, comfortable and easy to repeat.",

                tip:
                    "A clean silhouette and one good accessory can make a basic outfit feel intentional.",

                image:
                    "images/basic-tee-casual.jpg"
            },

            street: {
                label: "STREET",

                title: "Urban Energy",

                description:
                    "Give the everyday tee more attitude with baggy denim, chunky sneakers and statement accessories.",

                tip:
                    "Play with oversized proportions to give a basic piece more personality.",

                image:
                    "images/basic-tee-street.jpg"
            },

            layered: {
                label: "LAYERED",

                title: "Built in Layers",

                description:
                    "Layer your tee underneath an open shirt, jacket or blazer to create depth without making the outfit complicated.",

                tip:
                    "Let the basic tee act as your foundation and build the outfit around it.",

                image:
                    "images/basic-tee-layered.jpg"
            },

            chic: {
                label: "CHIC",

                title: "Simple, Elevated",

                description:
                    "Pair a clean basic tee with tailored trousers, subtle jewellery and refined accessories for an effortless polished look.",

                tip:
                    "The secret to making basics look expensive is structure, fit and thoughtful accessories.",

                image:
                    "images/basic-tee-chic.jpg"
            }

        }

    },


    /* =====================================
   TANK TOP
===================================== */

tank: {

    name: "THE TANK TOP",

    styles: {

        casual: {
            label: "CASUAL",

            title: "Easy & Effortless",

            description:
                "Keep the tank top relaxed with straight-leg denim, simple sneakers and minimal accessories for an easy everyday look.",

            tip:
                "Keep the rest of the outfit simple so the tank top feels effortless.",

            image:
                "images/tank-casual.jpg"
        },


        summer: {
            label: "SUMMER",

            title: "Summer Ease",

            description:
                "Pair the tank top with lightweight trousers or a flowing skirt, sandals and delicate accessories for a fresh summer look.",

            tip:
                "Light fabrics and simple accessories keep the look fresh and breathable.",

            image:
                "images/tank-summer.jpg"
        },


        sporty: {
            label: "SPORTY",

            title: "Sporty Energy",

            description:
                "Give the tank top an athletic edge with relaxed joggers, sneakers and practical accessories for a confident sporty look.",

            tip:
                "Mix sporty pieces with clean basics to keep the outfit stylish rather than overly athletic.",

            image:
                "images/tank-sporty.jpg"
        },


        layered: {
            label: "LAYERED",

            title: "Layered & Styled",

            description:
                "Use the tank top as a foundation underneath an open shirt, lightweight jacket or cardigan to create a more complete outfit.",

            tip:
                "Let the tank top act as your base and use the outer layer to add personality.",

            image:
                "images/tank-layered.jpg"
        }

    }

},


/* =====================================
   TIE NECK BLOUSE
===================================== */

blouse: {

    name: "THE TIE NECK BLOUSE",

    styles: {

        office: {
            label: "OFFICE",

            title: "Polished & Professional",

            description:
                "Pair the tie neck blouse with tailored trousers, structured accessories and simple heels for a polished office-ready look.",

            tip:
                "Keep the rest of the outfit structured and let the tie-neck detail be the focus.",

            image:
                "images/blouse-office.jpg"
        },


        feminine: {
            label: "FEMININE",

            title: "Soft & Refined",

            description:
                "Style the blouse with a flowing skirt, delicate jewellery and elegant accessories for a soft feminine look.",

            tip:
                "Choose delicate details and softer silhouettes to highlight the feminine character of the blouse.",

            image:
                "images/blouse-feminine.jpg"
        },


        casual: {
            label: "CASUAL",

            title: "Relaxed Elegance",

            description:
                "Dress the blouse down with straight-leg denim, simple flats and understated accessories for an effortless everyday outfit.",

            tip:
                "Pair the polished blouse with relaxed pieces to create an effortless contrast.",

            image:
                "images/blouse-casual.jpg"
        },


        evening: {
            label: "EVENING",

            title: "Elegant After Dark",

            description:
                "Take the tie neck blouse into the evening with tailored trousers or a sleek skirt, refined jewellery and sophisticated heels.",

            tip:
                "Keep the silhouette clean and add one elegant accessory to make the look feel evening-ready.",

            image:
                "images/blouse-evening.jpg"
        }

    }

}

};


/* =========================================================
   GET HTML ELEMENTS
========================================================= */

const pieceButtons =
    document.querySelectorAll(".piece-button");

const styleTabsContainer =
    document.getElementById("styleTabs");

const styleImage =
    document.getElementById("styleImage");

const imageLabel =
    document.getElementById("imageLabel");

const styleTitle =
    document.getElementById("styleTitle");

const styleDescription =
    document.getElementById("styleDescription");

const styleTip =
    document.getElementById("styleTip");

const styleInfo =
    document.getElementById("styleInfo");


/* =========================================================
   CURRENT SELECTION
========================================================= */

let currentPiece = "shirt";

let currentStyle = "minimal";


/* =========================================================
   CHANGE CLOTHING PIECE
========================================================= */

function changePiece(piece) {

    if (!clothingData[piece]) {
        return;
    }

    currentPiece = piece;

    const clothing = clothingData[piece];

    const firstStyle =
        Object.keys(clothing.styles)[0];

    currentStyle = firstStyle;


    /* -------------------------------------
       Change active piece button
    ------------------------------------- */

    pieceButtons.forEach((button) => {

        button.classList.remove("active");

        if (button.dataset.piece === piece) {
            button.classList.add("active");
        }

    });


    /* -------------------------------------
       Create new style tabs
    ------------------------------------- */

    if (!styleTabsContainer) {
        return;
    }

    styleTabsContainer.innerHTML = "";


    Object.keys(clothing.styles).forEach((style) => {

        const styleData =
            clothing.styles[style];

        const button =
            document.createElement("button");

        button.classList.add("style-tab");

        if (style === firstStyle) {
            button.classList.add("active");
        }

        button.dataset.style = style;

        button.textContent =
            styleData.label;

        styleTabsContainer.appendChild(button);

    });


    /* -------------------------------------
       Add click events to new tabs
    ------------------------------------- */

    const newTabs =
        styleTabsContainer.querySelectorAll(
            ".style-tab"
        );


    newTabs.forEach((tab) => {

        tab.addEventListener("click", () => {

            changeStyle(
                piece,
                tab.dataset.style
            );

        });

    });


    /* -------------------------------------
       Show first style
    ------------------------------------- */

    changeStyle(
        piece,
        firstStyle,
        false
    );

}


/* =========================================================
   CHANGE STYLE
========================================================= */

function changeStyle(
    piece,
    style,
    animate = true
) {

    if (
        !clothingData[piece] ||
        !clothingData[piece].styles[style]
    ) {
        return;
    }

    const data =
        clothingData[piece].styles[style];

    currentStyle = style;


    /* -------------------------------------
       Active styling tab
    ------------------------------------- */

    const tabs =
        styleTabsContainer.querySelectorAll(
            ".style-tab"
        );


    tabs.forEach((tab) => {

        tab.classList.remove("active");

        if (tab.dataset.style === style) {
            tab.classList.add("active");
        }

    });


    /* -------------------------------------
       IMAGE ANIMATION
    ------------------------------------- */

    if (styleImage) {

        if (animate) {

            styleImage.classList.add("changing");

            setTimeout(() => {

                styleImage.src =
                    data.image;

                styleImage.alt =
                    `${clothingData[piece].name} styled ${data.label.toLowerCase()}`;

                styleImage.classList.remove("changing");

            }, 250);

        } else {

            styleImage.src =
                data.image;

            styleImage.alt =
                `${clothingData[piece].name} styled ${data.label.toLowerCase()}`;

        }

    }


    /* -------------------------------------
   IMAGE LABEL
------------------------------------- */

imageLabel.textContent =
    clothingData[piece].name;


/* -------------------------------------
   PIECE NAME
------------------------------------- */

const pieceName =
    document.querySelector(".piece-name");

if (pieceName) {
    pieceName.textContent =
        clothingData[piece].name;
}

    /* -------------------------------------
       TEXT ANIMATION
    ------------------------------------- */

    if (styleInfo) {

        styleInfo.style.animation = "none";

        styleInfo.offsetHeight;

        styleInfo.style.animation =
            "styleTextIn 0.45s ease";

    }


    /* -------------------------------------
       UPDATE TEXT
    ------------------------------------- */

    if (styleTitle) {

        styleTitle.textContent =
            data.title;

    }


    if (styleDescription) {

        styleDescription.textContent =
            data.description;

    }


    if (styleTip) {

        styleTip.textContent =
            data.tip;

    }

}


/* =========================================================
   PIECE BUTTON EVENTS
========================================================= */

pieceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const piece =
            button.dataset.piece;

        changePiece(piece);

    });

});


/* =========================================================
   INITIALISE SECTION
========================================================= */

changePiece("shirt");


/* =========================================================
06. STYLE ME ENGINE
========================================================= */

let selectedPiece = "";

let selectedOccasion = "";

let selectedEnergy = "";


/* =========================================================
STEP 1 — PIECE
========================================================= */

function selectPiece(
    piece,
    button
) {

    selectedPiece = piece;

    selectStyleButton(button);

    setTimeout(() => {

        showStyleStep(2);

    }, 350);

}


/* =========================================================
STEP 2 — OCCASION
========================================================= */

function selectOccasion(
    occasion,
    button
) {

    selectedOccasion = occasion;

    selectStyleButton(button);

    setTimeout(() => {

        showStyleStep(3);

    }, 350);

}


/* =========================================================
STEP 3 — ENERGY
========================================================= */

function generateLook(
    energy,
    button
) {

    selectedEnergy = energy;

    selectStyleButton(button);

    setTimeout(() => {

        showGenerating();

    }, 350);

}


/* =========================================================
SELECT BUTTON
========================================================= */

function selectStyleButton(button) {

    if (!button) {
        return;
    }

    const buttons =
        button.parentElement.querySelectorAll(
            ".style-option"
        );

    buttons.forEach((item) => {

        item.classList.remove("selected");

    });

    button.classList.add("selected");

}


/* =========================================================
SHOW STYLE STEP
========================================================= */

function showStyleStep(step) {

    document
        .querySelectorAll(".style-step")
        .forEach((item) => {

            item.classList.remove("active");

        });


    const currentStep =
        document.getElementById(
            `styleStep${step}`
        );


    if (currentStep) {

        currentStep.classList.add("active");

    }


    document
        .querySelectorAll(".progress-step")
        .forEach((item) => {

            item.classList.remove("active");

        });


    const progress =
        document.getElementById(
            `progress${step}`
        );


    if (progress) {

        progress.classList.add("active");

    }

}


/* =========================================================
GENERATING SCREEN
========================================================= */

function showGenerating() {

    document
        .querySelectorAll(".style-step")
        .forEach((item) => {

            item.classList.remove("active");

        });


    const generating =
        document.getElementById(
            "styleGenerating"
        );


    if (!generating) {
        return;
    }


    generating.classList.add("active");


    const progress =
        document.getElementById(
            "generatingBar"
        );


    const generationText =
        document.getElementById(
            "generationText"
        );


    if (!progress) {
        return;
    }


    progress.style.width = "0%";


    setTimeout(() => {

        progress.style.width = "35%";

    }, 200);


    setTimeout(() => {

        progress.style.width = "70%";


        if (generationText) {

            generationText.textContent =
                "Finding the right combination...";

        }

    }, 900);


    setTimeout(() => {

        progress.style.width = "100%";


        if (generationText) {

            generationText.textContent =
                "Almost there...";

        }

    }, 1700);


    setTimeout(() => {

        createStyleResult();

    }, 2800);

}


/* =========================================================
CREATE STYLE RESULT
========================================================= */

function createStyleResult() {

    const resultTitle =
        document.getElementById(
            "resultTitle"
        );

    const resultDescription =
        document.getElementById(
            "resultDescription"
        );

    const resultBase =
        document.getElementById(
            "resultBase"
        );

    const resultOccasion =
        document.getElementById(
            "resultOccasion"
        );

    const resultEnergy =
        document.getElementById(
            "resultEnergy"
        );

    const resultImage =
        document.getElementById(
            "resultImage"
        );


    if (
        !resultTitle ||
        !resultDescription
    ) {

        return;

    }


    let title =
        "The Effortless One";

    let description =
        "Clean, confident and easy to wear. Your outfit feels intentional without looking like you tried too hard.";


    if (selectedEnergy === "Street") {

        title =
            "The Off-Duty Icon";

        description =
            "Relaxed proportions, unexpected layers and just enough attitude to make the outfit feel effortless.";

    }


    if (selectedEnergy === "Feminine") {

        title =
            "The Soft Statement";

        description =
            "A softer interpretation with delicate details and balanced proportions that still feel completely modern.";

    }


    if (selectedEnergy === "Bold") {

        title =
            "The Rule Breaker";

        description =
            "You don't dress to blend in. You mix proportions, textures and personality to create something unmistakably yours.";

    }


    resultTitle.textContent =
        title;

    resultDescription.textContent =
        description;


    if (resultBase) {

        resultBase.textContent =
            selectedPiece;

    }


    if (resultOccasion) {

        resultOccasion.textContent =
            selectedOccasion;

    }


    if (resultEnergy) {

        resultEnergy.textContent =
            selectedEnergy;

    }


    /* -------------------------------------
       RESULT IMAGE
    ------------------------------------- */

    if (resultImage) {

        if (
            selectedOccasion === "Concert" ||
            selectedEnergy === "Street"
        ) {

            resultImage.src =
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85";

        }

        else if (
            selectedEnergy === "Feminine"
        ) {

            resultImage.src =
                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85";

        }

        else {

            resultImage.src =
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85";

        }

    }


    const generating =
        document.getElementById(
            "styleGenerating"
        );

    const result =
        document.getElementById(
            "styleResult"
        );


    if (generating) {

        generating.classList.remove(
            "active"
        );

    }


    if (result) {

        result.classList.add(
            "active"
        );

    }

}


/* =========================================================
RESTART STYLE ME
========================================================= */

function restartStyle() {

    selectedPiece = "";

    selectedOccasion = "";

    selectedEnergy = "";


    const result =
        document.getElementById(
            "styleResult"
        );

    const generating =
        document.getElementById(
            "styleGenerating"
        );


    if (result) {

        result.classList.remove(
            "active"
        );

    }


    if (generating) {

        generating.classList.remove(
            "active"
        );

    }


    document
        .querySelectorAll(".style-option")
        .forEach((button) => {

            button.classList.remove(
                "selected"
            );

        });


    showStyleStep(1);

}


/* =========================================================
07. STYLE DNA
========================================================= */

let dnaSilhouette = "";

let dnaColour = "";


/* =========================================================
OPEN DNA
========================================================= */

function openDNA() {

    const modal =
        document.getElementById(
            "dnaModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.add("active");

    document.body.classList.add(
        "no-scroll"
    );

}


/* =========================================================
CLOSE DNA
========================================================= */

function closeDNA() {

    const modal =
        document.getElementById(
            "dnaModal"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove("active");

    document.body.classList.remove(
        "no-scroll"
    );


    setTimeout(() => {

        document
            .querySelectorAll(".dna-modal-step")
            .forEach((step) => {

                step.classList.remove(
                    "active"
                );

            });


        const firstStep =
            document.getElementById(
                "dnaStep1"
            );


        if (firstStep) {

            firstStep.classList.add(
                "active"
            );

        }


        const final =
            document.getElementById(
                "dnaFinal"
            );


        if (final) {

            final.classList.remove(
                "active"
            );

        }

    }, 400);

}


/* =========================================================
DNA QUESTION 1
========================================================= */

function dnaAnswer(answer) {

    dnaSilhouette = answer;


    const first =
        document.getElementById(
            "dnaStep1"
        );

    const second =
        document.getElementById(
            "dnaStep2"
        );


    if (first) {

        first.classList.remove(
            "active"
        );

    }


    if (second) {

        second.classList.add(
            "active"
        );

    }

}


/* =========================================================
DNA QUESTION 2
========================================================= */

function dnaAnswer2(answer) {

    dnaColour = answer;


    const second =
        document.getElementById(
            "dnaStep2"
        );

    const third =
        document.getElementById(
            "dnaStep3"
        );


    if (second) {

        second.classList.remove(
            "active"
        );

    }


    if (third) {

        third.classList.add(
            "active"
        );

    }

}


/* =========================================================
DNA RESULT
========================================================= */

function dnaResult(energy) {

    const third =
        document.getElementById(
            "dnaStep3"
        );

    const final =
        document.getElementById(
            "dnaFinal"
        );


    if (third) {

        third.classList.remove(
            "active"
        );

    }


    if (final) {

        final.classList.add(
            "active"
        );

    }


    let title =
        "The Effortless Minimalist";

    let description =
        "Clean, comfortable and intentional. You don't need loud pieces to make a statement.";


    if (
        dnaSilhouette === "Relaxed" &&
        dnaColour === "Dark"
    ) {

        title =
            "The Off-Duty Creative";

        description =
            "Relaxed silhouettes, darker tones and a little bit of unpredictability. You make casual look intentional.";

    }


    if (
        dnaColour === "Colourful" &&
        energy === "Creative"
    ) {

        title =
            "The Creative Maximalist";

        description =
            "You see clothing as a playground. Colour, contrast and unexpected combinations are your language.";

    }


    if (energy === "Confident") {

        title =
            "The Quiet Statement";

        description =
            "You don't need to shout. Strong silhouettes and intentional choices create your signature.";

    }


    const dnaTitle =
        document.getElementById(
            "dnaTitle"
        );

    const dnaDescription =
        document.getElementById(
            "dnaDescription"
        );


    if (dnaTitle) {

        dnaTitle.textContent =
            title;

    }


    if (dnaDescription) {

        dnaDescription.textContent =
            description;

    }


    /* -------------------------------------
       RESET BARS
    ------------------------------------- */

    document
        .querySelectorAll(".dna-bar span")
        .forEach((bar) => {

            bar.style.width = "0%";

        });


    /* -------------------------------------
       ANIMATE BARS
    ------------------------------------- */

    setTimeout(() => {

        const minimal =
            document.getElementById(
                "barMinimal"
            );

        const street =
            document.getElementById(
                "barStreet"
            );

        const creative =
            document.getElementById(
                "barCreative"
            );


        if (minimal) {

            minimal.style.width = "78%";

        }


        if (street) {

            street.style.width = "42%";

        }


        if (creative) {

            creative.style.width = "65%";

        }

    }, 300);

}


/* =========================================================
08. CUSTOM CURSOR
========================================================= */

const cursor =
    document.getElementById(
        "cursor"
    );


if (
    cursor &&
    window.innerWidth > 600
) {

    document.addEventListener(
        "mousemove",
        (event) => {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";

        }
    );


    document
        .querySelectorAll(".cursor-view")
        .forEach((element) => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.classList.add(
                        "active"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.classList.remove(
                        "active"
                    );

                }
            );

        });

}


/* =========================================================
09. MAGNETIC BUTTONS
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".primary-btn"
    );


magneticButtons.forEach((button) => {

    button.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth <= 600) {
                return;
            }


            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.12}px, ${y * 0.12}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0, 0)";

        }
    );

});


/* =========================================================
10. CLOSE DNA WITH ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeDNA();

        }

    }
);