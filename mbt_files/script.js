// function open popup box
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

// function close popup box
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// variables needed for inputting friends' MBTIs
var enterButton = document.getElementById("enterBtn");
var n = 1;

// function for sign in
function enter() {
  
}

const prev= document.getElementById('prev-btn');
const next= document.getElementById('next-btn');
const list= document.getElementById('item-list');

const itemWidth = 150;
const padding = 10;

prev.addEventListener('click', ()=> {
  list.scrollLeft -=itemWidth + padding;
})

next.addEventListener('click', ()=> {
   list.scrollLeft -=itemWidth + padding;
})

// variable for the div w/ id MBTInfo
var infoMBTI = document.getElementById("MBTInfo");
var descMBTI1 = document.getElementById("MBTIdesc1");
var descMBTI2 = document.getElementById("MBTIdesc2");
var imgMBTI = document.getElementById("MBTImg");

// function for clicking on the INTJ png
function clickMBTIINTJ() {
  infoMBTI.style.backgroundColor = "#b2a4ff";
  window.scrollTo(0, document.body.scrollHeight);
  
  imgMBTI.src = "images/MBTI Info Pictures/INTJ visual.png";
  descMBTI1.innerHTML = "<b>Introverted, Intuitive, Thinking, Judging<b><br>";
  descMBTI2.innerHTML = "Individuals with the INTJ personality are often characterized by their strategic thinking, analytical mindset, and a natural inclination towards problem-solving. INTJs are highly independent and value intellectual competence. They are adept at seeing the big picture and formulating long-term plans, often driven by a desire to achieve their goals efficiently. Despite their introverted nature, INTJs can assert themselves with confidence when it comes to expressing their ideas and leading others. Known for their preference for logic over emotion, INTJs may appear reserved, but their minds are constantly at work, seeking innovative solutions to challenges. Overall, INTJs bring a unique blend of creativity, strategic insight, and determination to any endeavor they undertake.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the INTP png
function clickMBTIINTP() {
  infoMBTI.style.backgroundColor = "#b2a4ff";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/INTP visual.png";
  descMBTI1.innerHTML = "<b>Introverted, Intuitive, Thinking, Perceiving<b><br>";
  descMBTI2.innerHTML = "INTPs are characterized by their intellectual curiosity, abstract thinking, and flexibility. These individuals are known for their love of exploring ideas, theories, and concepts, often pushing the boundaries of conventional thinking. INTPs enjoy problem-solving and are highly innovative, seeking logical explanations for complex phenomena. Their introverted nature can make them appear reserved, but they are deeply contemplative and thrive in independent, intellectual pursuits. While they may seem laid-back due to their perceiving trait, INTPs possess a keen ability to adapt to new information and perspectives, making them adaptable and open-minded individuals in various intellectual domains.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ENTJ png
function clickMBTIENTJ() {
  infoMBTI.style.backgroundColor = "#b2a4ff";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ENTJ visual.png";
  descMBTI1.innerHTML = "<b>Extroverted, Intuitive, Thinking, Judging<b><br>";
  descMBTI2.innerHTML = "ENTJs are natural-born leaders with a strategic and assertive approach to achieving their goals. These individuals are extroverted, confident, and thrive in social situations, making them adept at taking charge and inspiring others. ENTJs are known for their decisive decision-making, logical thinking, and ability to organize and execute plans efficiently. They have a forward-thinking mindset and are often driven by a desire to turn their visions into reality. While their strong-willed nature can sometimes come across as imposing, ENTJs are motivated by a commitment to excellence and achievement. In both professional and personal contexts, ENTJs excel in leadership roles, providing direction and structure to those around them.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ENTP png
function clickMBTIENTP() {
  infoMBTI.style.backgroundColor = "#b2a4ff";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ENTP visual.png";
  descMBTI1.innerHTML = "<b>Extroverted, Intuitive, Thinking, Perceiving<b><br>";
  descMBTI2.innerHTML = "ENTPs are known for their quick thinking, curiosity, and love for intellectual challenges. These individuals are highly extroverted, enjoying engaging conversations and social interactions. ENTPs thrive in brainstorming sessions, where their innovative and unconventional ideas can shine. Their intuitive and perceptive nature allows them to grasp complex concepts easily, making them adept problem solvers. However, their preference for spontaneity and flexibility can sometimes lead to a lack of focus on long-term planning. ENTPs are characterized by their charm, adaptability, and the ability to see multiple sides of an issue, making them excellent communicators and idea generators in both professional and personal settings.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the INFJ png
function clickMBTIINFJ() {
  infoMBTI.style.backgroundColor = "#7ED7C1";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/INFJ visual.png";
  descMBTI1.innerHTML = "<b>Introverted, Intuitive, Feeling, Judging<b><br>";
  descMBTI2.innerHTML = "INFJs are characterized by their deep empathy, insight, and a strong sense of purpose. These individuals are introverted and reserved, preferring meaningful one-on-one connections over large social gatherings. INFJs possess an intuitive understanding of others' emotions and are often driven by a desire to make a positive impact on the world. With their strong values and idealistic outlook, INFJs are natural advocates for social justice and harmony. They excel in creative and reflective pursuits, often gravitating towards careers that allow them to express their compassion and creativity. While their private nature can make them seem mysterious, INFJs are dedicated individuals who work tirelessly to bring about positive change and understanding in their relationships and communities.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the INFP png
function clickMBTIINFP() {
  infoMBTI.style.backgroundColor = "#7ED7C1";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/INFP visual.png";
  descMBTI1.innerHTML = "<b>Introverted, Intuitive, Feeling, Perceiving<b><br>";
  descMBTI2.innerHTML = "INFPs are characterized by their deep sense of empathy, creativity, and a strong inner conviction. These individuals are introverted and value introspection, seeking meaning and authenticity in their lives. INFPs are driven by their emotions and a desire to align their actions with their personal values. They are often drawn to artistic and humanitarian pursuits, using their creativity to make a positive impact on the world. While they may appear reserved, INFPs possess a warmth and sincerity that fosters deep connections with others. Their flexible and adaptable nature allows them to appreciate diverse perspectives, making them compassionate and open-minded individuals who strive to create a harmonious and authentic world.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ENFJ png
function clickMBTIENFJ() {
  infoMBTI.style.backgroundColor = "#7ED7C1";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ENFJ visual.png";
  descMBTI1.innerHTML = "<b>Extroverted, Intuitive, Feeling, Judging<b><br>";
  descMBTI2.innerHTML = "ENFJs are known for their charismatic and empathetic nature. These individuals are extroverted, enjoying social interactions and often taking on leadership roles with enthusiasm. ENFJs are highly attuned to the emotions and needs of others, making them natural nurturers and motivators. They have a genuine interest in fostering positive relationships and are often driven by a sense of purpose to help those around them. With strong communication skills and a diplomatic approach, ENFJs excel in bringing people together and creating a sense of unity. They are often found in roles where they can inspire and guide others toward personal and collective growth, contributing to a harmonious and supportive environment.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ENFP png
function clickMBTIENFP() {
  infoMBTI.style.backgroundColor = "#7ED7C1";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ENFP visual.png";
  descMBTI1.innerHTML = "<b>Extroverted, Intuitive, Feeling, Perceiving<b><br>";
  descMBTI2.innerHTML = "ENFPs are known for their vibrant and enthusiastic personalities. These individuals are highly extroverted, thriving in social situations and bringing infectious energy to their interactions. ENFPs are creative and imaginative, with a deep passion for exploring possibilities and embracing change. They are driven by their values and a desire for authenticity, often championing causes that align with their beliefs. While their perceptive nature can make them spontaneous, ENFPs are adaptable and open-minded, making them skilled communicators who connect easily with others. They inspire those around them with their optimism and zest for life, making them natural catalysts for creativity and positive change.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ISTJ png
function clickMBTIISTJ() {
  infoMBTI.style.backgroundColor = "#9ADCFF";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ISTJ visual.png";
  descMBTI1.innerHTML = "<b>Introverted, Sensing, Thinking, Judging<b><br>";
  descMBTI2.innerHTML = "ISTJs are characterized by their practicality, attention to detail, and a strong sense of responsibility. These individuals are introverted and value structure and order in both their personal and professional lives. ISTJs are reliable and methodical, excelling in tasks that require precision and adherence to established procedures. They have a strong work ethic and are often drawn to roles where they can contribute to the efficient functioning of systems. While they may seem reserved, ISTJs are dependable and loyal, valuing tradition and stability. Their commitment to duty and their ability to plan meticulously make them valuable contributors to teams and organizations that benefit from their organized and systematic approach.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ISFJ png
function clickMBTIISFJ() {
  infoMBTI.style.backgroundColor = "#9ADCFF";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ISFJ visual.png";
  descMBTI1.innerHTML = "<b>Introverted, Sensing, Feeling, Judging<b><br>";
  descMBTI2.innerHTML = "ISFJs are characterized by their compassion, reliability, and a strong sense of duty. These individuals are introverted and enjoy creating harmonious environments, often prioritizing the well-being of others. ISFJs are meticulous and detail-oriented, excelling in tasks that require organization and a caring touch. They are often found in roles where their nurturing qualities can shine, such as caregiving or support professions. With a strong commitment to tradition and loyalty, ISFJs value close-knit relationships and are dedicated to fulfilling their responsibilities. Their warm-hearted nature and attention to others' needs make them valued team members and compassionate friends.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ESTJ png
function clickMBTIESTJ() {
  infoMBTI.style.backgroundColor = "#9ADCFF";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ESTJ visual.png";
  descMBTI1.innerHTML = "<b>Extroverted, Sensing. Thinking, Judging<b><br>";
  descMBTI2.innerHTML = "ESTJs are characterized by their practicality, strong leadership skills, and a focus on order and efficiency. These individuals are extroverted and excel in roles that require organization, structure, and decision-making. ESTJs are often found in leadership positions where their ability to implement plans and uphold rules contributes to the success of a team or organization. They have a no-nonsense approach, valuing tradition and established procedures. While they may seem firm, ESTJs are dedicated and reliable, driven by a sense of duty to fulfill their responsibilities. Their decisive nature and results-oriented mindset make them effective leaders and contributors to achieving goals in a systematic manner.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ESFJ png
function clickMBTIESFJ() {
  infoMBTI.style.backgroundColor = "#9ADCFF";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ESFJ visual.png";
  descMBTI1.innerHTML = "<b>Extroverted, Sensing, Feeling, Judging <b><br>";
  descMBTI2.innerHTML = "ESFJs are characterized by their sociable and caring nature. These individuals are extroverted and thrive in social settings, often taking on roles that involve nurturing and supporting others. ESFJs are excellent communicators, creating harmonious environments and building strong relationships. They are deeply attuned to the emotions of those around them, making them compassionate and empathetic. ESFJs often gravitate towards careers in caregiving, teaching, or counseling, where their people-oriented skills can shine. While they may prioritize the needs of others, ESFJs also value tradition and order, contributing to the stability and well-being of their communities through their responsible and reliable approach.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ISTP png
function clickMBTIISTP() {
  infoMBTI.style.backgroundColor = "#FFE185";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ISTP visual.png";
  descMBTI1.innerHTML = "<b>Introverted, Sensing Thinking. Perceiving<b><br>";
  descMBTI2.innerHTML = "ISTPs are characterized by their practicality, adaptability, and a keen sense of exploration. These individuals are introverted and value their independence, thriving in hands-on, problem-solving situations. ISTPs have a natural aptitude for mechanics and a curiosity that drives them to understand how things work. They are often skilled in troubleshooting and can excel in dynamic environments. Despite their reserved nature, ISTPs are spontaneous and live in the present moment, making them adept at responding to the immediate needs of a situation. Their ability to stay calm under pressure and their analytical approach make ISTPs valuable contributors to teams and projects that require a blend of technical expertise and adaptability.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ISFP png
function clickMBTIISFP() {
  infoMBTI.style.backgroundColor = "#FFE185";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ISFP visual.png";
  descMBTI1.innerHTML = "<b>Introverted, Sensing, Feeling, Perceiving<b><br>";
  descMBTI2.innerHTML = "ISFPs are characterized by their creativity, sensitivity, and a deep appreciation for aesthetics. These individuals are introverted and value their personal space, often expressing themselves through artistic and expressive outlets. ISFPs have a keen eye for beauty and are drawn to the sensory experience of the world around them. They are empathetic and value authenticity, often seeking to bring harmony and creativity to their surroundings. ISFPs may seem reserved initially, but they have a warm and gentle nature that allows them to form deep connections with others. Their adaptable and spontaneous approach to life makes ISFPs flexible individuals who enjoy exploring new possibilities and embracing the richness of their emotional experiences.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ESTP png
function clickMBTIESTP() {
  infoMBTI.style.backgroundColor = "#FFE185";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ESTP visual.png";
  descMBTI1.innerHTML = "<b>Extroverted, Sensing, Thinking, Perceiving<b><br>";
  descMBTI2.innerHTML = "ESTPs are characterized by their outgoing nature, adaptability, and a penchant for taking risks. These individuals are extroverted and thrive in dynamic environments, often seeking excitement and variety in their experiences. ESTPs are action-oriented and make decisions quickly, displaying a natural confidence that contributes to their effectiveness in leadership roles. They excel in situations that require quick thinking, resourcefulness, and the ability to navigate challenges with ease. While they may appear spontaneous, ESTPs are observant and practical, relying on their keen senses to assess and respond to their surroundings. Their energetic and bold approach to life makes ESTPs valuable contributors to teams and projects that demand a mix of strategic thinking and hands-on action.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}

// function for clicking on the ESFP png
function clickMBTIESFP() {
  infoMBTI.style.backgroundColor = "#FFE185";
  window.scrollTo(0, document.body.scrollHeight);

  imgMBTI.src = "images/MBTI Info Pictures/ESFP visual.png";
  descMBTI1.innerHTML = "<b>Extroverted, Sensing, Feeling, Perceiving<b><br>";
  descMBTI2.innerHTML = "ESFPs are characterized by their vibrant energy, sociability, and a love for the present moment. These individuals are extroverted and thrive in social situations, often bringing enthusiasm and spontaneity to their interactions. ESFPs are natural performers, enjoying creative pursuits and seeking opportunities for self-expression. They are often the life of the party, contributing to a lively and enjoyable atmosphere. While they may prefer the immediate and tangible over long-term planning, ESFPs possess a warmth and kindness that fosters strong connections with others. Their adaptable and flexible nature makes them adept at navigating various social dynamics, contributing to the joy and spontaneity of the experiences they share with those around them.";

  infoMBTI.style.display = "block";
  descMBTI1.style.display = "block";
  descMBTI2.style.display = "block";
  imgMBTI.style.display = "block";
}