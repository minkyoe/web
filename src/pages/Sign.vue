<template>
    <v-container grid-list-sm back fluid>
        <v-flex column wrap mr-5 sm5 md5 lg5 offset-lg6 offset-md6 offset-sm6 login-container>
            <v-flex xs2 sm2 md2 lg1 offset-lg6 offset-sm4>
              <img src="../assets/logo_korea@2x.png" class="logo">
            </v-flex>

            <v-layout column wrap v-if="this.signUpPageFlag == 0">
                <v-flex offset-lg5 offset-sm3>
                    <form @submit.prevent="signInMethod">
                        <v-flex>
                            <v-text-field placeholder="아이디" color="none" id="id" name="id" v-model="id" required></v-text-field>
                            <v-text-field type="password" placeholder="비밀번호" color="none" id="password" name="password" v-model="password" required></v-text-field>
                        </v-flex>
                    
                        <v-flex mb-3 login>
                            <button type="submit">로그인</button>
                        </v-flex>
                    </form>
                </v-flex>

            
                <v-flex offset-lg5 offset-sm3 join v-on:click="signUpPage">
                    회원가입
                </v-flex>
            </v-layout>

            <v-layout column wrap v-else>
              <v-flex offset-lg5 offset-sm3>
                    <form @submit.prevent="onSignUp">
                        <v-flex>
                            <v-text-field placeholder="아이디" color="none" v-model="user_id"></v-text-field>
                            <v-text-field placeholder="비밀번호" color="none" v-model="user_pw"></v-text-field>
                            <v-text-field placeholder="비밀번호 확인" color="none"></v-text-field>
                        </v-flex>

                        <a href="#select-part">
                            <v-flex sm3 md3 lg3 offset-sm4 offset-md4 purple-btn @click="$vuetify.goTo(target, options)">다음</v-flex>
                        </a>

                        <v-layout column wrap user-additional-info>
                            <a name="select-part"></a>
                          <v-flex reco-text>
                            나에게 맞는 코디 추천을 
                          <br>
                            정보를 제공해주세요
                          </v-flex>

                          <v-flex mt-5 reco-text>
                            성별
                          </v-flex>

                          <v-flex row wrap sex-info>
                            <img v-if="this.womanFlag === 0" src="../assets/join_woman_no@2x.png" v-on:click="click_woman" class="sex_woman">
                            <img v-else src="../assets/join_woman_ok@2x.png" v-on:click="click_woman" class="sex_woman">

                            <img v-if="this.manFlag === 0" src="../assets/join_man_no@2x.png" alt="" v-on:click="click_man" class="sex_man">
                            <img v-else src="../assets/join_man_ok@2x.png" alt="" v-on:click="click_man" class="sex_man">
                          </v-flex>

                          <v-flex column offset-sm4 offset-md4 hw-info>
                              <v-flex sm12 md12 lg12>
                                <v-text-field placeholder="키" color="none" v-model="user_height"></v-text-field>
                                <v-text-field placeholder="몸무게" color="none" v-model="user_weight"></v-text-field>
                              </v-flex>
                          </v-flex>


                          <v-flex reco-text age-info>
                              나이
                          </v-flex>
                          <v-layout row wrap align-center>
                            <v-flex sm2 md2 lg2 offset-sm5 offset-md5>
                                <v-text-field color="none" v-model="user_age"></v-text-field>
                              </v-flex>
                              <span class="age-text">세</span>
                          </v-layout>

                          <v-flex row reco-text style-text>
                              스타일
                          </v-flex>

                          <v-layout row wrap style-info>
                                <v-flex row sm3 md3 lg3 style-btn v-for= "i in styleArray" :key="i" v-on:click="click_style" class="style-button">
                                    {{ i }}
                                </v-flex>
                          </v-layout>

                        <v-flex offset-sm4 offset-md4>
                            <v-flex sm6 md6 lg6 purple-btn>
                                <button type="submit">가입완료</button>
                            </v-flex>
                        </v-flex>
                    
                        </v-layout>
                    </form>
                </v-flex>
            </v-layout>
            
        </v-flex>
    </v-container>
</template>

<script>
import * as easings from 'vuetify/es5/util/easing-patterns'
export default {
    data () {
        return {
            user_id: '',
            user_pw: '',
            user_gender: '',
            user_age: '',
            user_height: '',
            user_weight: '',
            user_stylelist: [],


            signUpPageFlag : 0,
            womanFlag : 0,
            manFlag : 0,
            styleArray : ["빈티지", "스트릿", "클래식", "모던", "캐쥬얼", "유스", "심플", "댄디", "로맨틱", "그 외"],
            styleFlagArray: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            type: 'number',
            number: 9999,
            selector: '#select-part',
            duration: 300,
            offset: 0,
            easing: 'easeInOutCubic',
            easings: Object.keys(easings)
        }
    },
    methods: {
        onSignUp () {
            const object = {
                user_id: this.user_id,
                user_pw: this.user_pw,
                user_gender: this.user_gender,
                user_age: this.user_age,
                user_height: this.user_height,
                user_weight: this.user_weight,
                user_stylelist: this.user_stylelist

            }
            console.log(object);
            this.$store.dispatch('signUp',object)
        },

        signUpPage() {
            this.signUpPageFlag = 1;
        },
        click_woman() {
           
            if(this.womanFlag === 0){
                this.womanFlag = 1;
                this.manFlag = 0;
                this.user_gender = '여';

            }else {
                this.womanFlag = 0;
            }
        },
        click_man() {
            if(this.manFlag === 0) {
                this.manFlag = 1;
                this.womanFlag = 0;
                this.user_gender = '남';
            }else {
                this.manFlag = 0;
            }
        },
        click_style(e) {
            var clicked_btn = document.getElementsByClassName("style-button");
        
            if(this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] === 0) {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] = 1;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.background = "#741DFF";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.borderColor = "#741DFF";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#FFFFFF";
                this.user_stylelist.push(e.toElement.innerText);
            }
            else {
                this.styleFlagArray[this.styleArray.indexOf(e.toElement.innerText)] = 0;
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.background = "#FFFFFF";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.borderColor = "#AAAAAA";
                clicked_btn[this.styleArray.indexOf(e.toElement.innerText)].style.color = "#AAAAAA";
            }
        },
        signInMethod() {
            const object = {
                user_id : this.id,
                user_pw : this.password
            }
            
            this.$store.dispatch('signIn', object)
        }
    },
    computed: {
      target () {
        const value = this[this.type]
        if (!isNaN(value)) return Number(value)
        else return value
      },
      options () {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing
        }
      }
    }  
}
</script>

<style scoped>
.login-container {
    margin-top : 310px;
}

.back {
    width: 100%;
    height: 100%;
    background-image:url('../assets/signup_back.png');
    background-size: cover;
    /* background-attachment:fixed; */
}

.logo {
    width: 200px;
    margin-left: 30px;
}

.login {
    height: 40px;
    background-color: #741DFF;
    color: white;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}

.join {
    height: 40px;
    color: #741DFF;
    border: 1px solid #741DFF;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}

.purple-btn {
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  height: 40px;
  font-family: Arial;
  color: #741DFF;
  font-size: px;
  background: #ffffff;
  border: solid #741DFF 1px;
  text-decoration: none;
  text-align: center;
  line-height: 37px;
  margin-top: 40px;
}

a {
    text-decoration: none;
}

.user-additional-info {
    padding-top: 100px;
    text-align: center;
}

.reco-text {
    font-weight: bold;
    color: #741DFF;
    line-height: 25px;
}

.sex-info {
    margin : 20px 0;
}

.sex_man, .sex_woman {
    cursor: pointer;
}

.hw-info {
    width: 120px;
}

.age-info {
    margin-top: 80px;
}

.age-text {
    color: #AAAAAA;
}

.style-btn {
  -webkit-border-radius: 36;
  -moz-border-radius: 36;
  border-radius: 36px;
  font-family: Arial;
  color: #AAAAAA;
  height: 35px;
  line-height: 35px;
  border: solid #AAAAAA 1px;
  text-decoration: none;
  margin: 5px 5px;
  cursor: pointer;
}

.style-text {
    margin-top: 80px;
    margin-bottom: 20px;
}

.style-info {
    padding-left: 50px;
    text-align: center;
}

</style>
