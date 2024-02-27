/* Toggling audio and icon */
var clicksVolume = 0;
var shosty = document.getElementById("shosty");

function change() {
  switch(clicksVolume) {
    case 0: 
      document.getElementById('volume').style.background = "url('/images/index/volume-up-fill.svg') no-repeat";
      document.getElementById('volume').style.height = "60px";
      document.getElementById('volume').style.width = "60px";
      document.getElementById('volume').style.backgroundSize = "contain";
      shosty.play();
      clicksVolume++;
      break;

    case 1:
      document.getElementById('volume').style.background = "url('/images/index/volume-mute-fill.svg') no-repeat";
      document.getElementById('volume').style.height = "60px";
      document.getElementById('volume').style.width = "60px";
      document.getElementById('volume').style.backgroundSize = "contain";
      shosty.pause();
      clicksVolume--;
      break;
  }
}

var eventInfo = {
  info1 : {
    date: "July 28, 1914",
    description: "Due to the assasination of Archduke Franz Ferdinand days prior, a declaration of war is handed out by Austria-Hungary on Serbia, beginning the first World War. Russia, being an ally of Serbia, declares war on Austria-Hungary and eventually Germany.",
    imgCaption: "[Image: Assassination of Franz Ferdinand - Depiction]"
  },

  info2: {
    date: "August 1915",
    description:  "Tsar Nicholas II takes command of the Russian frontlines, leaving the capital of St. Petersburg, now renamed Petrograd due to anti-German sentiment.",
    imgCaption: "[Image: Nicholas at the front]"
  },

  info3: {
    date: "June/July 1916",
    description: "The Brusilov Offensive against Germany and Austria-Hungary is waged, the last successful Russian military operation of the war. To add, in January 1917, the Mensheviks (moderate communists) call for nation-wide revolution in Russia.",
    imgCaption: "[Image: Brusilov Offensive - Depiction]"
  },

  info4: {
    date: "February 23, 1917",
    description: "The February Revolution begins in Saint Petersburg on International Women's Day and the Provisional Government is established as the ruling administrative power in the empire. Georgy Lvov, and later Alexander Kerensky, lead the said government. Thus, four days later, the Tsar orders the use of military force to put down dissent. Soldiers begin to mutiny against the government. Leon Trotsky and other revolutionaries form the Petrograd Soviet, a city council in the Tsarist capital. The worsening situation eventually forces Tsar Nicholas to give up the throne on March 8th.",
    imgCaption: "[Image: February Revolution]"
  },

  info5: {
    date: "April 3, 1917",
    description: "Lenin returns from exile in Switzerland, arriving by train in St. Petersburg. The next day, he publishes his April Theses, a work criticizing the Provisional Government for its inability to end the war that Russia found itself in and calls for further revolution - one of a proletarian nature.",
    imgCaption: "[Image: Lenin returns from exile]"
  },

  info6: {
    date: "June 1917",
    description: "Alexander Kerensky, seeking success against Germany and Austria-Hungary, begins the June Offensive. The attack miserably fails, further debilitating Russia’s position in the war and igniting more discontent.",
    imgCaption: "[Image: Kerensky, undated]"
  },
  
  info7: {
    date: "August 1917",
    description: "Lavr Kornilov, a Russian General, attempts a coup against the Provisional Government, later known as the Kornilov Affair. Alexander Kerensky joins forces with Leon Trotsky and the Petrograd Soviet to put down this dissent.",
    imgCaption: "[Image: Lavr Kornilov and the Affair]"
  },
  
  info8: {
    date: "October 25, 1917",
    description: "On October 24, the October Revolution begins: Provisional forces clash with the Bolsheviks in Petrograd. The next day, Bolshevik revolutionaries led by Vladimir Lenin storm the Winter Palace and seize power from the Provisional Government; St. Petersburg is now under Bolshevik control.",
    imgCaption: "[Image: Storming of the Winter Palace - 1920 Reenactment]"
  },

  info9: {
    date: "March 3, 1918",
    description: "Lenin, along with Bolshevik Russia, signs the Treaty of Brest-Litovsk with the Central Powers, withdrawing Russia from the First World War and ceding much of the former territory of the Russian Empire. The Bolsheviks continue to fight anti-communist factions known as the Whites, in the Russian Civil War (started in 1917). The war culminates in the formation of the Soviet Union in December 30, 1922; Lenin is the main leader. He leads the country until his death in 1924.",
    imgCaption: "[Image: Treaty of Brest-Litovsk]"
  },

  info10: {
    date: "March 1917 - February 1921",
    description: "The Bolsheviks chiefly fight Ukrainian separatists and anarchists in the Ukrainian War of Independence. The war ends in a Bolshevik victory, with Ukraine being incorporated into the newly created Soviet Union.",
    imgCaption: "[Image: Ukranian soldiers take an oath (Ukranian war of independence)]"
  },

  info11: {
    date: "November 1918 - March 1919",
    description: "Soviet Russia begins a westward offensive against territories left by Germany after its surrender in WW1, particularly the Baltic states of Estonia, Latvia, and Lithuania. The offensive fails, and said states gain their independence. The Russians also enter territories under Polish claim and control, sparking the Polish-Soviet War.",
    imgCaption: "[Image: Propaganda on the Soviet Westward offensive]"
  },

  info12: {
    date: "February 1919 - March 1921",
    description: "Soviet Russia invades and fights the Second Polish Republic in the Polish-Soviet War over territories of the former Russian Empire. After countering the Polish Kiev Offensive in April of 1920, the Soviets pushed all the way to the Polish capital of Warsaw, where they were decisively defeated in the ensuing Battle of Warsaw by Marshal Josef Pilsudski (August 1920). Soon after, the Reds sued for peace.",
    imgCaption: "[Image: Polish soldiers during the Battle of Warsaw (Polish-Soviet War)]"
  },
}

/* Replacing sidebar innerHTML content (header, paragraph, caption) depending on image clicked (passed as parameter) */
var eventOrder; 
function toggleNav(eventOrder) {
  infoAppear();
  document.getElementById("eventInfoHead").innerHTML = eventInfo["info"+eventOrder]["date"];
  document.getElementById("eventInfoPar").innerHTML = eventInfo["info"+eventOrder]["description"];
  document.getElementById("eventImgCaption").innerHTML = eventInfo["info"+eventOrder]["imgCaption"];
}


/*Make sidebar appear and disappear*/

function infoAppear() {
  document.getElementById("eventInfo").style.width = "250px";
  document.getElementById("images").style.marginLeft = "300px";
}

function infoDisappear() {
  document.getElementById("eventInfo").style.width = "0";
  document.getElementById("images").style.margin = "auto";
}