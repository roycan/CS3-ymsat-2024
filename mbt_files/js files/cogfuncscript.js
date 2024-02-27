// variable for the div w/ id MBTInfo
var infoCogFunc = document.getElementById("CogFuncInfo");
var OneCogFunc = document.getElementById("CogFunc1");
var TwoCogFunc = document.getElementById("CogFunc2");
var descCogFunc1 = document.getElementById("CogFuncdesc1");
var descCogFunc2 = document.getElementById("CogFuncdesc2");

// function for clicking on the Feeling functions
function clickFeeling() {
  infoCogFunc.style.backgroundColor = "#9adcff";
  window.scrollTo(0, document.body.scrollHeight);

  OneCogFunc.innerHTML = "Introverted Feeling (Fi)";
  descCogFunc1.innerHTML = "Individuals with a dominant or well-developed Introverted Feeling function often prioritize their own moral compass and strive for authenticity in their actions and relationships. They possess a strong sense of empathy and authenticity, seeking to align their choices with their deeply held values. Introverted Feeling is prevalent in personality types such as INFP and ISFP, contributing to their individualistic and compassionate nature. These individuals value personal integrity and may spend time reflecting on their emotions and beliefs to create a genuine and coherent sense of self.";
  TwoCogFunc.innerHTML = "Extraverted Feeling (Fe)";
  descCogFunc2.innerHTML = "Individuals with a strong Extraverted Feeling function are often attuned to the emotional needs of those around them and seek to create positive social environments. They excel in interpersonal relationships, valuing consensus and cooperation. Extraverted Feeling is evident in personality types such as ENFJ and ESFJ, contributing to their warm, empathetic nature and their ability to connect with and support others. These individuals are often skilled at navigating social dynamics, fostering group cohesion, and promoting a sense of community and understanding within their circles.";

  infoCogFunc.style.display = "block";
  descCogFunc1.style.display = "block";
  descCogFunc2.style.display = "block";
  OneCogFunc.style.display = "block";
  TwoCogFunc.style.display = "block";
}

// function for clicking on the Thinking functions
function clickThinking() {
  infoCogFunc.style.backgroundColor = "#7ed7c1";
  window.scrollTo(0, document.body.scrollHeight);

  OneCogFunc.innerHTML = "Introverted Thinking (Ti)";
  descCogFunc1.innerHTML = "Individuals with a dominant or well-developed Introverted Thinking function often engage in deep introspection and value coherence and consistency in their understanding of the world. They enjoy exploring complex concepts and frameworks, seeking to establish their own logical structures. Introverted Thinking is prevalent in personality types such as INTP and ISTP, contributing to their analytical and independent thinking. These individuals excel in tasks that require problem-solving, critical analysis, and the ability to delve deeply into the details of a subject to construct their own internally consistent understanding.";
  TwoCogFunc.innerHTML = "Extraverted Thinking (Te)";
  descCogFunc2.innerHTML = "Individuals with a strong Extraverted Thinking function are often practical, results-oriented, and decisive. They prefer making decisions based on objective criteria and strive for efficiency in problem-solving. Extraverted Thinking is evident in personality types such as ENTJ and ESTJ, contributing to their leadership qualities, strategic planning, and emphasis on effective systems. These individuals excel in environments that require clear structures, data-driven decision-making, and the ability to organize and lead teams toward concrete goals.";

  infoCogFunc.style.display = "block";
  descCogFunc1.style.display = "block";
  descCogFunc2.style.display = "block";
  OneCogFunc.style.display = "block";
  TwoCogFunc.style.display = "block";
}

// function for clicking on the Intuition functions
function clickIntuition() {
  infoCogFunc.style.backgroundColor = "#b2a4ff";
  window.scrollTo(0, document.body.scrollHeight);

  OneCogFunc.innerHTML = "Introverted Intuition (Ni)";
  descCogFunc1.innerHTML = "Individuals with a dominant or well-developed Introverted Intuiting or Intuitive function often have a deep sense of foresight and are adept at envisioning long-term implications. They rely on their internal understanding and insights, often seeking connections between seemingly unrelated information. Introverted Intuiting is prevalent in personality types such as INFJ and INTJ, contributing to their strategic thinking, vision-oriented approach, and ability to anticipate future trends. These individuals value depth of insight and may appear contemplative as they internally process information to make sense of complex patterns and possibilities.";
  TwoCogFunc.innerHTML = "Extraverted Intuition (Te)";
  descCogFunc2.innerHTML = "Individuals with a strong Extraverted Intuiting function are imaginative and innovative, often drawn to exploring new ideas and making diverse connections between concepts. They enjoy brainstorming and generating possibilities, adapting quickly to changing circumstances. Extraverted Intuiting is evident in personality types like ENTP and ENFP, contributing to their creative, adaptable, and open-minded nature. These individuals are often enthusiastic about exploring the myriad of potential outcomes and tend to thrive in environments that allow for spontaneity and idea exploration.";

  infoCogFunc.style.display = "block";
  descCogFunc1.style.display = "block";
  descCogFunc2.style.display = "block";
  OneCogFunc.style.display = "block";
  TwoCogFunc.style.display = "block";
}


// function for clicking on the Sensing functions
function clickSensing() {
  infoCogFunc.style.backgroundColor = "#ffe185";
  window.scrollTo(0, document.body.scrollHeight);

  OneCogFunc.innerHTML = "Introverted Sensing (Si)";
  descCogFunc1.innerHTML = "Individuals with a dominant or well-developed Introverted Sensing function tend to rely on their memories, traditions, and established routines. They often have a keen attention to detail and a strong sense of recall, drawing upon their past experiences to guide their present actions. Introverted Sensing individuals appreciate stability and order, finding comfort in the familiar. This cognitive function is notably present in personality types such as ISTJ and ISFJ, where it contributes to their methodical, organized, and tradition-oriented approach to life.";
  TwoCogFunc.innerHTML = "Extraverted Sensing (Se)";
  descCogFunc2.innerHTML = "Individuals with strong Extraverted Sensing are often attuned to their surroundings, appreciating sensory experiences and living in the present moment. They are quick to notice details, enjoy engaging in hands-on activities, and are generally spontaneous and adaptable. Extraverted Sensing individuals often have a pragmatic approach, responding effectively to the immediate demands of their environment. This cognitive function is prevalent in personality types such as ESTP and ESFP, where it contributes to their energetic, action-oriented, and sensorially attuned natures";

  infoCogFunc.style.display = "block";
  descCogFunc1.style.display = "block";
  descCogFunc2.style.display = "block";
  OneCogFunc.style.display = "block";
  TwoCogFunc.style.display = "block";
}