<template>
    <v-card>
        <v-container grid-list-xs fluid detail-con>
          <v-layout row wrap>
            <v-flex>
               <v-carousel detail-carousel :cycle="false" hide-delimiters light> 
                    <v-carousel-item v-for="(pages,index) in followingPages" :key="index">
                        <v-layout row wrap following-container>
                        <v-flex sm2 md2 lg2 column user-item v-for="(following, i) in followings.showFollowingIDResult.slice(index*24, index*24+24)" :key="i">
                                <img :src="following.user_img" class="user_img">
                                <v-flex following-id>{{following.user_id}}</v-flex>
                        </v-flex>

                        </v-layout>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>

          </v-layout>
        </v-container>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
        
        }
    },
    computed: {
        ...mapGetters({
            followings: 'allFollowings',
            token: 'tokenInfo'
        }),
        followingPages (){
            var pages = Math.ceil(this.followings.showFollowingIDResult.length / 24)
            console.log(pages)
            return pages
        }
    },
    created () {
            this.$store.dispatch('getFollwings',this.token)
    }

}
</script>

<style>

.user_img{
    width: 80px;
    height: 80px;
    border-radius: 80px;
    /* display: inline; */
}

.user-item {
    text-align: center;
    font-weight: bold;
    /* margin: 20px 10px; */
}

.following-container {
    text-align: center;
    padding: 15px 15px;
}

.detail-con{
    overflow: hidden;
    height: auto;
    padding: 0%;
}

.detail-carousel{
    width: 50%;
}

.following-id {
    text-align: center;
}

</style>
