import * as template from "./template.textgenerator.js"

const { TOKEN, makeTokens } = template;

const globals = { };

let name = "", route_select = "", declares_pirate = "", genderish = "", dragon_strat = "", cave_passage = "";

function reset( ) {
  name = "";
  route_select = "";
  declares_pirate = "";
  genderish = "";
  dragon_strat = "";
  cave_passage = "";
}

function* START( ) {
  yield TOKEN.PAGE_START;
  yield [ TOKEN.TITLE, "Chapter 1 | A Call to Adventure" ];
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "The evening was some sort of strange gloomy dusk. I immediately regretted coming to this place. The air was damp and yet every surface seemed dry. I could feel the wind and yet the trees stood still." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "It was something like a week before that I had uncovered that note, that strange thing, with that map, and I had finally decided to take it seriously. A day prior (or was it two?) my best friend seemingly vanished." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "A strange bird song the likes of which I can find no comparison shrieked through the otherwise silent air. I realized, this place was quiet, too quiet. When I reached a clearing I was relieved and frightened. At first the clearing from a distance seemed like it might be only a tiny patch, like I'd seen before on the walk here, but the closer I got to it the more apparent it became that this clearing was huge. It felt as though I had left the forest and yet I could still see in the distance yet more trees." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "When Abby disappeared I was, well, to say concerned would be putting it lightly. Abby was my best friend, but recently..." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I turned around to mark where I'd come from but was distrubed to find that I couldn't locate my entrance. Odd. Turning back around to face the clearing I spotted a strange tower on the far side towards my left I could swear hadn't been there before. Was I going mad?" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "When I first discovered Abby was missing I asked around if anyone knew what had happened but no one told me anything I didn't already know. She'd recently been going on about some strange, ... something or other I never paid too much attention to. I probably should have." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I eventually had the bright idea to check an old hiding spot we'd use as kids. I won't say where, of course, but sure enough Abby had left me a note. Cryptic as it was, however, I didn't get much use from it." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "When I reached the tower it seemed to be made of some sort of stone in some dull purplish color that had been fashioned into large bricks. Surrounding the tower was a loose circle of cobblestone made of roughly the same material. I looked up to see how tall the tower was but it vanished into some sort of grey mist I hadn't noticed before. I should have seen this coming." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Abby's note had started the way you'd expect a note might, \"" ];
  yield TOKEN.ITALIC_START;
  yield [ TOKEN.BLANK_SA, 15, __$result => { name = __$result; }, ( ) => name ];
  yield [ TOKEN.TEXT, "," ];
  yield TOKEN.ITALIC_END;
  yield [ TOKEN.TEXT, "\" my name, followed by a comma, like an old fashioned letter. The note continued, \"I've discovered something truly incredible, you must come see it\" I reckon it probably had a spelling mistake I'm forgetting in my retelling, too. At the bottom of the note was a hand drawn map giving completely sans labels save for an arrow and a circle at its tip." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "So now I was here, at the base of some strange tower, in the middle of some strange forest. I took a minute to question my life decisions and checked my cell phone. No service, figured as much. It was low on battery too so I opted to save it until it proved necessary." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I entered the tower and hoped this off putting forest and tower would be the weirdest thing that happened to me that day. I had a feeling it wouldn't be." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "The inside of the tower was damp, dark, and cold. Unnaturally cold. There wasn't much of anything in the tower, no windows were in sight, save for the door I had come in through and a single spiral staircase leading both up and down the tower. Before I could really grapple with the strange environment I found myself in I heard a strange warbling sound that was like a bird call, but not any bird call I was familiar with. I felt strangely compelled to " ];
  yield [ TOKEN.BLANK_MC, [ "head up the staircase", "descend into the basement", "check outside" ], __$result => { route_select = __$result; }, ( ) => route_select ];
  yield [ TOKEN.TEXT, "." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  if ( route_select === "head up the staircase" ) {
    yield* route_up( );
    return TOKEN.END;
  } else if ( route_select === "check outside" ) {
    yield* route_middle( );
    return TOKEN.END;
  } else if ( route_select === "descend into the basement" ) {
    yield* route_down( );
    return TOKEN.END;
  } else {
    return TOKEN.END;
  }
}

function* route_up( ) {
  yield [ TOKEN.TEXT, "So I did, climbing, and climbing, and climbing, and climbing to the point that I realized I was far above where the top of the tower could possibly have been when I first saw it. What was this place? Trying to shake the thought from my head I only continued and after a few excruciating minutes, I finally found something." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "The top of the staircase, and a door. A strange, grey wooden door with iron bandings that both seemed to be made to withstand a nuclear blast and as if it could crumble at the lightest touch. I opened the door and stepped out into a village." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Turning around it was immediately apparent that the tower was no longer behind me. \"Figures as much,\" I muttered to myself. I wondered how many times this would happen on this excursion." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I looked around. I was in some strange cross between a fantasy book's idea of a medieval village and a sci-fi book's idea of the industrial revolution. Houses made of cobblestone, planks, and brick contrasted with copper, silver, and transparent pipes snaking around the town. Looking further I saw sky, clouds, and islands floating in the sky. It became apparent on closer inspection that this section of village too was suspended in midair." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "All around the village turbines whirred, gears spun, and comically large chimneys pumped steam into the sky. Giant cloth wind turbines spun despite no noticeable wind and people hurried about the cobblestone street in linen garments adorned with metallic ornaments. In my jeans and brightly colored t-shirt covered by a jacket I stood out like a sore thumb." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I heard the warbling sound again as a few of what looked like butterflies made of stained glass rushed past me like darts." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I felt a tapping on my shoulder. Spinning around a figure in a brown cloak looked at me menacingly." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Are you a pirate?”" ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“" ];
  yield [ TOKEN.BLANK_MC, [ "Yes.", "No.", "No?", "No!", "Of course not!", "Who's asking?" ], __$result => { declares_pirate = __$result; }, ( ) => declares_pirate ];
  yield [ TOKEN.TEXT, "”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  if ( declares_pirate === "Yes." ) {
    yield* dp_yes( );
    return TOKEN.END;
  } else if ( declares_pirate === "No." ) {
    yield* dp_no0( );
    return TOKEN.END;
  } else if ( declares_pirate === "No?" ) {
    yield* dp_no1( );
    return TOKEN.END;
  } else if ( declares_pirate === "No!" ) {
    yield* dp_no2( );
    return TOKEN.END;
  } else if ( declares_pirate === "Of course not!" ) {
    yield* dp_no3( );
    return TOKEN.END;
  } else if ( declares_pirate === "Who's asking?" ) {
    yield* dp_ask( );
    return TOKEN.END;
  } else {
    return TOKEN.END;
  }
}

function* dp_yes( ) {
  yield [ TOKEN.TEXT, "They look at me sideways, “You're clearly not a pirate. Too stupid. What are you and why are you dressed in the same sort of clothes as this new lady pirate who's been causing us issues?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I have no idea.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Fine. But you're coming to headquarters.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* dp_rejoin( );
  return TOKEN.END;
}

function* dp_no0( ) {
  yield [ TOKEN.TEXT, "“Perhaps not, but you're the second strange thing this week. I'd like to take you to headquarters for questioning.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* dp_rejoin( );
  return TOKEN.END;
}

function* dp_no1( ) {
  yield [ TOKEN.TEXT, "“Hmm, you appear to be genuinely bewildered. Would you mind coming in and answering some questions?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Based on the look on their face, there was only one correct answer to that question." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Sure.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Good.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* dp_rejoin( );
  return TOKEN.END;
}

function* dp_no2( ) {
  yield [ TOKEN.TEXT, "“Well, I guess we'll see about that. You're going to follow me and we're going to have a chat.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* dp_rejoin( );
  return TOKEN.END;
}

function* dp_no3( ) {
  yield [ TOKEN.TEXT, "“Of course, of course.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Then why'd you ask?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“There's a new pirate around who looks like they come from wherever it is you do.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I see.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Would you mind coming in to answer some questions?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“No, I don't think I'd mind.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Thank you. Follow me.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* dp_rejoin( );
  return TOKEN.END;
}

function* dp_ask( ) {
  yield [ TOKEN.TEXT, "“The government, and you full-well know that, you're coming with us.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I actually don't know that, I'm not from here.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Then how'd you get here?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Magic, by the looks of things.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Whatever. You can tell us all about it at headquarters.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I will.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* dp_rejoin( );
  return TOKEN.END;
}

function* dp_rejoin( ) {
  yield [ TOKEN.TEXT, "The official led me down the street to a large building labeled “Government Offices” and ushered me in. They brought me to a room with a couple of chairs, a table, a lantern letting off a disconcerting shade of green, and one of their associates with whom they left me." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“What do you know about the sky pirates?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Nothing, honestly.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "They slid a picture to me showing Abby aboard a flying pirate ship holding a cutlass." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Then why is this new pirate wearing the same clothing as you?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“They look like they're from the same place I am.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“And that would be?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“In relation to here? I have no idea.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“If you don't know where your home is, how did you get here?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“There was this tower and I climbed it and when I reached the top here I was.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“So magic, then.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Something like that.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Well, would you like to go home, erhm... What's your name?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“" ];
  yield [ TOKEN.TEXT, name ];
  yield [ TOKEN.TEXT, ".”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Well " ];
  yield [ TOKEN.TEXT, name ];
  yield [ TOKEN.TEXT, ", if we can figure out how to get you home would you like to return?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I would.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“And would you be willing to help us with something in exchange?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“What exactly would that be?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“We want a mole in the sky pirates. Would you do that for us?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Absolutely.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Over the course of the next couple hours they found a place for me to stay and I successfully located a man with a massive scar across his face clearly recruiting for the sky pirates. It occurred to me with the ease of this task how massive the issue must be for their government." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Sir, eh, er, madam, —”" ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“" ];
  yield [ TOKEN.BLANK_MC, [ "Sir's fine.", "Ma'am's fine.", "It's irrelevant, surely" ], __$result => { genderish = __$result; }, ( ) => genderish ];
  yield [ TOKEN.TEXT, "”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* makeTokens( ( ( ) => {
  if (genderish === "Sir's fine.") {
    globals.gender = "M";
  } else if (genderish === "Ma'am's fine.") {
    globals.gender = "F";
  } else {
    globals.gender = "X";
  }
} )( ) );
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Well, what do you want in life?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“To sail the skies.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“You've come to the right place.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I sure hope I have.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Well then. Welcome aboard" ];
  yield* makeTokens( ( ( ) => {return globals.gender === "M" ? " Sir" : globals.gender === "F" ? " Ma'am" : ""} )( ) );
  yield [ TOKEN.TEXT, ".”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  return TOKEN.END
}

function* route_middle( ) {
  yield [ TOKEN.TEXT, "Stepping back out of the tower I found myself in a place distinctly different from where I started. All around was a village of some sort, houses of cobblestone and wood with straw roofs stood along winding dirt paths." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "A majestic mountain loomed in the distance as what was dense forest going in was no sparse plains. I could faintly smell smoke. The roads were strangely absent of people." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Just as I could say that, however, a young woman, about 20 by my guess, with big muscles and a massive grin exited a house carrying a large pail." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Hello there! You seem new here.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I am.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“You come at a rather unfortunate time, as you might be able to tell from the, well,” she gestured around her, “lack of people hanging out.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“What's up with that?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“We used to live a simple life here,” she held out her hand and lifted upwards slightly. Water sprung from the ground between the pebbles and began to syphon into her pail. She set it down, and continued, “then this big, terrible beast arrived. It is the size of an elephant, with teeth like those of vipers, the scales of a fish, and it flies with two great and terrible wings as if it were an inflated bat. It tears buildings like paper and spits hot fire with a ferocity akin to the worst weapons of war. The beast's been ravaging our town for almost a month now.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Any idea why?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Not one. At first we thought it was the food, our crops, animals, perhaps even us, but it hasn't eaten anything, only destroyed.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“That's something.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Hey, you don't by chance happen to know a lady by the name of Abigail, do you?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I do. Why?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“You're the second mysterious stranger to show up recently, so, I was wondering if there was some relationship there.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I see. Do you know where she is?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“The tavern, I'd guess. Seems to spend a lot of time there.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Thank you.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Taking a brief stroll to the tavern pointed out by her --- Why didn't I ask her name? --- I entered perhaps the busiest place in the village." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Abby sat at the bar and I sat next to her. A hooded figure with an eye-patch in the corner shot me a nasty look, I ignored them." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“See why I asked you to come?” she said." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“How even, does any of this...?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Good question, I'd love to know that myself.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“It's like entering the physical manifestation of a novel.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Yeah.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“So there's a dragon here.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Correct.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“And what are the odds we're the protagonists?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Basically 100%”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“So how do we deal with it?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I didn't get that far.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“You did get far enough to send word for me, though.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“So, presumably we kill it, or?”" ];
  yield TOKEN.PARA_END;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“" ];
  yield [ TOKEN.BLANK_MC, [ "Kill it.", "Incapacitate it.", "Use the power of friendship." ], __$result => { dragon_strat = __$result; }, ( ) => dragon_strat ];
  yield [ TOKEN.TEXT, "”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  if ( dragon_strat === "Kill it." ) {
    return TOKEN.END;
  } else if ( dragon_strat === "Incapacitate it." ) {
    return TOKEN.END;
  } else if ( dragon_strat === "Use the power of friendship." ) {
    yield* dragon_strat_friend( );
    return TOKEN.END;
  } else {
    return TOKEN.END;
  }
}

function* dragon_strat_friend( ) {
  yield [ TOKEN.TEXT, "“And you expect that to work?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“It would make just as much sense as anything else around here.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  return TOKEN.END
}

function* route_down( ) {
  yield [ TOKEN.TEXT, "I started down the stairs taking it one step at a time. The stairs, which seemed to be made of some sort of old, rotting, wood, creaked under my feet with each step. As I descended the environment became darker and darker as the light from outside diminished." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I heard a muffled slam and looking above me saw that a wrought iron grate had been closed over the top of the staircase." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "At that moment all I could think was, “That's really not good.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "As my eyes adjusted to the new dark environment and I reached the bottom of the stairs I found myself in what could generously be called a basement. The whole thing was damp, dark, and cold, even more so than upstairs, and filling the air was the stench of something rotten. The bricks that had once confidently formed the walls receded into natural stone opening into some sort of larger cave system." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "A handful of barrels, covered in dust and cobwebs, were lit by a faint green light filling the space that I could not locate the source of. The walls, floors, ceiling, and everything else were covered in a thin layer of some sort of liquid, I hope it was water, presumably acting as the source of that awful smell." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Even more disorienting still drops of water dripped upwards from the floor of the cavern towards the ceiling in a bizarre violation of the laws of physics." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "My ears were flooded with this horrid crawling sound as if every inch of every surface was covered in a thousand million spiders." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I shuddered and rubbed my eyes, begging myself to wake up. No such luck." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I paused for a moment to scan my surroundings. There was the staircase I had traveled down of course, but due to the grate I could return that way. Even if I could, I was unsure if I wanted to deal with whatever it was that caused the grate to seal me in. The staircase came down in a corner, and this corner had a haphazard pile of barrels in it. Directly opposing it, however, the region opened up to a larger cave something on the order of ten meters across, on the opposite side of which were passages leading in three different directions." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I went down the " ];
  yield [ TOKEN.BLANK_MC, [ "left", "middle", "right" ], __$result => { cave_passage = __$result; }, ( ) => cave_passage ];
  yield [ TOKEN.TEXT, " passageway." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  if ( cave_passage === "left" ) {
    yield* cave_left( );
    return TOKEN.END;
  } else if ( cave_passage === "middle" ) {
    yield* cave_mid( );
    return TOKEN.END;
  } else if ( cave_passage === "right" ) {
    yield* cave_right( );
    return TOKEN.END;
  } else {
    return TOKEN.END;
  }
}

function* cave_left( ) {
  yield [ TOKEN.TEXT, "The passages got tighter and closer together as I slipped through them, but never to the point I was forced to turn around. At some point I stumbled upon a region that looked to be some kind of enormous library with books nestled into the walls. The library stretched for some distance but didn't appear to have any exits besides the one I came in through." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I picked a book off the shelves. It's cover was a plain shade of " ];
  yield* makeTokens( ( ( ) => { /* random color name */ } )( ) );
  yield [ TOKEN.TEXT, " and the title wriggled and morphed in front of me. One moment it read “The Grand Adventures of The World's Most Paradoxical Creature” and the next “The Optimal Meal Preparation Strategies for Undead Goats and Their Cook Staff.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I flipped open the book to a random page, it was written in what might have been a language I didn't understand but that I suspected to be simply gibberish." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“" ];
  yield* makeTokens( ( ( ) => { /* Text gen */ } )( ) );
  yield [ TOKEN.TEXT, ",” it said." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This too, seemed to change, but only slowly and when I wasn't paying attention." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "I put the book back and checked a few more. They all had the same strange properties." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Deciding that there wasn't anything else to find there, I returned to the main cavern." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* cave_again( );
  return TOKEN.END;
}

function* cave_mid( ) {
  yield [ TOKEN.TEXT, "As I traveled along it, I began to notice fragments of what looked to be glass, or else some brightly colored transparent gemstone, roughly the size of my hand embedded in the wall. As I went further the pieces of glass became more prevalent until the entire area seemed to be made only of glass and the light slowly grew brighter, although I still could not place the source." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "At the end of the passage, a large, thin, wall of lavender glass separated one end of the room from the other, preventing me from continuing." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "This was not the most interesting thing, however, as on the other side of this window stood Abby, looking intently at what appeared to be some sort of unusual golden pocket watch she held in her hand." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Abby!”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "She looked up at me, “" ];
  yield [ TOKEN.TEXT, name ];
  yield [ TOKEN.TEXT, ", I'm glad you got my note.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Now that I'm here, can you explain to me what's going on?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“No idea.”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“What's that you have in your hand?”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“I'm not sure, I think —” she looked at the object and began fiddling with one of its dials, “that it has something to do with —”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "There was a flash of light and a roaring boom. Abby had vanished." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "“Of course, that's how that would work!”" ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "There was no one to hear my scream. Defeated, I returned to the central area." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield* cave_again( );
  return TOKEN.END;
}

function* cave_right( ) {
  yield [ TOKEN.TEXT, "Along this passageway the air slowly grew warmer and breezy and I began to notice vines growing up the walls. Strange buds on the vines let off a lovely amber light and the passage grew only wider and greener." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Eventually the cave opened out into an enormous cavern that stretched as far as I could see that consisted of a jungle surrounding a large lake that I could only just barely see the far side of." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield [ TOKEN.TEXT, "Stepping down into this jungle, I wondered if I should have explored the other passageways." ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  yield TOKEN.PAGE_START;
  yield [ TOKEN.PARA_START, false ];
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  return TOKEN.END
}

function* cave_again( ) {
  yield* makeTokens( ( ( ) => { /* Some sort of code to make it so you can head down the other cave routes after each one. Problem for future Ben, she's great at dealing with this kind of thing and won't be at all upset with me, I'm sure. :) */ } )( ) );
  yield TOKEN.PARA_END;
  yield TOKEN.PAGE_END;
  return TOKEN.END
}

export default new template.TextGenerator( START, reset );