import Vue from 'vue'
import Vuex from 'vuex'
import database from '@/store/modules/database/database'
import tests from '@/store/modules/database/tests'
import auth from '@/store/modules/auth/auth'
import users from '@/store/modules/auth/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    database,
    auth,
    tests,
    users
  }
})
