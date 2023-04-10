const app = Vue.createApp({
  setup() {
    const state = Vue.reactive({
      question: null,
      userInput: '',
      progress: 0,
      maxProgress: 0,
      message: '',
      inputClasses: []
    })

    const questionList = [
      'ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ', 'ㄧ', 'ㄨ', 'ㄩ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'
    ]

    const toneList = ['ˊ', 'ˇ', 'ˋ', '˙','_']


    const generateQuestion = () => {

    let question = ''
    let length = Math.floor(Math.random() * 51) + 100

    while (question.length < length) {
      let char = questionList[Math.floor(Math.random() * questionList.length)]
      let tone = toneList[Math.floor(Math.random() * toneList.length)]

      if (question.length % 3 === 2 && Math.random() < 0.4) {
        question += `${char}${tone}_`
      } else {
        question += `${char}`
      }
    }
      console.log(question)
      state.question = question
      state.userInput = ''
      state.progress = 0
      state.maxProgress = question.length
      state.message = ''
      chakeval = 0
      state.inputClasses = []
    }

    // call generateQuestion function on component mount
    Vue.onMounted(() => {
      generateQuestion()
    })

    const checkAnswer = (event) => {
      state.userInput = ''
      const answer = state.question
      console.log(`you:${phoneticKeyboard[event.key]} true:${answer[chakeval]}`)
      if (phoneticKeyboard[event.key] == answer[chakeval]) {


        if (state.inputClasses[chakeval] == undefined) state.inputClasses[chakeval] = 'correct-char'
        else state.inputClasses[chakeval] = 'incorrect-char'

        chakeval++
        state.message = ''
        if (chakeval === state.maxProgress) {
          state.message = '恭喜！你已經完成練習！'
          setTimeout( generateQuestion() , 500);
        }
      }
      else {
        state.inputClasses[chakeval] = -1
      }
    }


    return {
      state,
      generateQuestion,
      checkAnswer
    }
  }
})

app.mount('#app')
var chakeval = 0;
var input=0;

function unfoces(){
  input=0;
  setTimeout(
    function(){
      if(input==0)document.getElementById("newq").click();
    } , 
    500
);};



const phoneticKeyboard = {
  '1': 'ㄅ',
  'q': 'ㄆ',
  'a': 'ㄇ',
  'z': 'ㄈ',
  '2': 'ㄉ',
  'w': 'ㄊ',
  's': 'ㄋ',
  'x': 'ㄌ',
  'e': 'ㄍ',
  'd': 'ㄎ',
  'c': 'ㄏ',
  'r': 'ㄐ',
  'f': 'ㄑ',
  'v': 'ㄒ',
  '5': 'ㄓ',
  't': 'ㄔ',
  'g': 'ㄕ',
  'b': 'ㄖ',
  'y': 'ㄗ',
  'h': 'ㄘ',
  'n': 'ㄙ',
  '8': 'ㄚ',
  'i': 'ㄛ',
  'k': 'ㄜ',
  ',': 'ㄝ',
  '9': 'ㄞ',
  'o': 'ㄟ',
  'l': 'ㄠ',
  '.': 'ㄡ',
  '0': 'ㄢ',
  'p': 'ㄣ',
  ';': 'ㄤ',
  '/': 'ㄥ',
  '-': 'ㄦ',
  'u': 'ㄧ',
  'j': 'ㄨ',
  'm': 'ㄩ',
  '6': 'ˊ',
  '3': 'ˇ',
  '4': 'ˋ',
  '7': '˙',
  ' ':'_'
};
