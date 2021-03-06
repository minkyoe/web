export const Mutations = {
  signUpSuccess (state, payload) {
    console.log('SignUpFinish')
  },

  // 1. actions : 비동기 처리
  // 2. mutations : 데이터를 변경 함
  // 변경 뒤엔 state(전역 데이터)가 바뀌어 있겠지?

  // getters : 그냥 데이터 가져오는 용도
  signInSuccess (state, payload) {
    state.token = payload.token
    console.log('sign In Finish')
    console.log(payload.token, '77777777777777777777777')
    location.reload()
  },
  getFollowingsSuccess (state, payload) {
    state.user_followings = payload.data
  },
  getTodayRecSuccess (state, payload) {
    state.today_rec = payload.data
  },
  getTodayPopularSuccess (state, payload) {
    state.feeds = payload.data
  },

  getTodayNewSuccess (state, payload) {
    state.feeds = payload.data
  },

  getFollowingFeedSuccess (state, payload) {
    state.following_feed = payload.data
  },

  getAllFilterSuccess (state, payload) {
    state.feeds = payload.data
  },

  getTodayFilterSuccess (state, payload) {
    state.feeds = payload.data
  },
  userInfo (state) {
    console.log('get user Info Start')
  },
  userInfoSuccess (state, payload) {
    console.log('get user Info success')
    state.mypage = payload
  },
  navInfo (state) {
    console.log('get nav Info Start')
  },
  navInfoSuccess (state, payload) {
    console.log('get nav Info Success')
    state.nav = payload.data
  },
  modiMypageInfo (state) {
    console.log('modify mypage Start')
  },
  modifyMypageSuccess (state, payload) {
    console.log('modify Mypage Success')
    state.mypage = payload.data
  },
  getModiInfo (state) {
    console.log('get Modify Mypage')
  },
  modiInfoSuccess (state, payload) {
    console.log('modify Mypage Success')
    state.mypageModi = payload.data
  },
  getFeedCommentInfo (state) {
    console.log('get feed comment info start')
  },
  getFeedCommentSuccess (state, payload) {
    state.feedComment = payload.data
    console.log('get feed comment Success')
  },
  registerCommentStart (state, payload) {
    console.log('register comment start')
  },
  registerCommentSuccess (state, payload) {
    console.log('register Comment Success')
    var comment = {
      'comment_idx': payload.comment_idx,
      'board_idx': payload.board_idx,
      'comment_desc': payload.comment_desc,
      'comment_id': state.mypage.showUserPageResult[0].user_id
    }
    state.feedComment.push(comment)
  },
  likeSuccess (state, payload) {
    console.log('like Success')
  },
  getAlarmSuccess (state, payload) {
    console.log('get alarm Info Success')
    state.alarm = payload.data
  },
  getFollowerSuccess (state, payload) {
    console.log('get followers Success')
    state.user_followers = payload.data
  }
}
