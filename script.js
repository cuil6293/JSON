let projectDisplayElement = document.getElementById("characters");

let jsonDatabase = [
{
	"name": "Twilight Sparkle",
	"type": "Unicorn/Alicorn",
	"element": "Magic",
	"description": "A rational book lover who is learning about the magic of friendship. She's sent over to Ponyville by Princess Celestia to learn more about the magic of frienship along with her dragon companion, Spike. She initially starts the series off as a unicorn, but (spoilers) later on becomes an alicorn the more she learns about magic and becomes the princess of frienship.",
	"images": ["Twilight1.png", "Twilight2.png", "Twilight3.png"],
	"backgroundColor": "#c1b4fa",
	"color": "#fffff"

},
{
	"name": "Pinky Pie (Pinkamena Diane Pie)",
	"type": "Earth pony",
	"element": "Laughter",
	"description": "The life of the party! She's a baker/party organizer at the Sugarcube Corner in Ponyville who wants to be everybody's friend. She's a weird but fun and easily excitable character with many talents and strange quirks that even her most logical friend can't explain. She's always silly and friendly, but can become pretty serious when they occassion calls for it.",
	"images": ["Pinky1.png", "Pinky2.png", "Pinky3.png"],
	"backgroundColor": "#ed72b6",
	"color": "#fffff"

},
{
	"name": "Applejack",
	"type": "Earth pony",
	"element": "Honesty",
	"description": "An apple farmer who lives with her granny, brother, and little sister in Sweet Apple Acres. She's a hardworking character who tries her best to be as reliable as possible to others. However, she's also incredibly stubborn and is often overprotective of her little sister. Due to being a farmer, she's also incredibly strong and fast.",
	"images": ["Apple1.png", "Apple2.png", "Apple3.png"],
	"backgroundColor": "#eb9252",
	"color": "#fffff"
},
{
	"name": "Rainbow Dash",
	"type": "Pegasus",
	"element": "Loyalty",
	"description": "An amazing flier who lives for adventure and being as cool/awesome as possible. She works hard to eventually become part of an elite flying team, the Wonderbolts. She's competitive and very confident of her skills, but can sometimes be overly confident or care a little too much about appearing cool which gets her in some trouble.",
	"images": ["Rainbow1.png", "Rainbow2.png", "Rainbow3.png"],
	"backgroundColor": "#7cc5de",
	"color": "#fffff"
},
{
	"name": "Fluttershy",
	"type": "Pegasus",
	"element": "Kindness",
	"description": "A sweet animal lover who seems to have a special connection and confidence with animals. She's very shy around other people and can sometimes be a coward, but tries her best to break out of that. Her empathy and kindess may be the reason so many animals like her and also the reason why she was one of the few ponies that Discord could not break.",
	"images": ["Fluttershy1.png", "Fluttershy2.png", "Fluttershy3.png"],
	"backgroundColor": "#94cf6d",
	"color": "#fffff"
},
{
	"name": "Rarity",
	"type": "Unicorn",
	"element": "Generosity",
	"description": "A fabulous fashion designer and seamtress with a shop in Ponyville called the Carousel Boutique. She loves fashion and beauty and loves to be the center of attention, which causes her to care a lot about what other people think of her, but she tries her hardest to break out of that, especially for the people she cares about. She's incredibly resourceful and tough when she needs to be.",
	"images": ["Rarity1.png", "Rarity2.png", "Rarity3.png"],
	"backgroundColor": "#db74c7",
	"color": "#fffff"
},
{
	"name": "Princess Celestia",
	"type": "Alicorn",
	"element": "Sun",
	"description": "The princess and ruler of Equestria. She used to rule alongside her sister until something happened that separated the both of them for a while until the power of friendship was able to help them reunite and rule with each other. She's able to raise the sun with her magic and generally rules during the day.",
	"images": ["Celestia1.webp", "Celestia2.webp", "Celestia3.webp"],
	"backgroundColor": "#72c2c0",
	"color": "#fffff"
},
{
	"name": "Princess Luna",
	"type": "Alicorn",
	"element": "Moon"
	"description": "The princess and ruler of Equestria. Due to a conflict with her sister, Celestia, she turned into the villain Nightmare Moon and stayed that way until the power of friendship helped her snap out of it. She rules over the night and protects ponies in their dreams. She's more awkward than her sister.",
	"images": ["Luna1.webp", "Luna2.webp", "Luna3.webp"],
	"backgroundColor": "#2f3399",
	"color": "#fffff"
},
];


document.addEventListener('DOMContentLoaded', function() {
 	for (var i = 0; i < jsonDatabase.length; i++) {
 	createElementProper(jsonDatabase[i]);
  }
});

function createElementProper(incomingJSON){
	let newContentBox = document.createElement("DIV");
	newContentBox.style.backgroundColor = incomingJSON['backgroundColor'];
	newContentBox.classList.add('newContentBox');

	let newName = document.createElement("H2");
	newName.innerText = "Name: " + incomingJSON["name"];
	newContentBox.appendChild(newName);

	let newType = document.createElement("P");
	newType.innerText = "Type: " + incomingJSON["type"];
	newContentBox.appendChild(newType);

	let newElement = document.createElement("P");
	newElement.innerText = "Element: " + incomingJSON["element"];
	newContentBox.appendChild(newElement);

	let newDescription = document.createElement("P");
	newDescription.innerText = "Description: " + incomingJSON["description"];
	newContentBox.appendChild(newDescription);

	  let imageGallery = document.createElement("div");
    imageGallery.classList.add("image-gallery");

    // Loop through the array of images
    for (let i = 0; i < incomingJSON["images"].length; i++) {
        let newImage = document.createElement("img");
        newImage.src = incomingJSON["images"][i];
        newImage.classList.add("imgClass");

        // Create a separate anchor for Fancybox
        let newImageFancybox = document.createElement("a");
        newImageFancybox.href = incomingJSON["images"][i];
        newImageFancybox.setAttribute("data-fancybox", "gallery");
        newImageFancybox.appendChild(newImage);

        imageGallery.appendChild(newImageFancybox);
    }

    newContentBox.appendChild(imageGallery);

	projectDisplayElement.appendChild(newContentBox);
}


