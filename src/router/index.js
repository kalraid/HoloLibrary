import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 //* hidden: true                라우터를 감출지 여부
 //! meta : {
    roles: ['admin','editor']    라우터 권한 구성
    title: 'title'               메뉴에 표시될 메뉴명 구성
    icon: 'mdi-icon              메뉴에 표시될 아이콘 구성
    breadcrumb: false            이 옵션을 조절하면 브래드 크럼을 ON/OFF 할 수 있음.
    activeClass: 'is-active'     메뉴에 활성화될 메뉴를 조절할 수 있음. (메뉴 템플릿에서 구성필요)
    prefix: true                 그룹을 생성하지 않는다. (대시보드 사용)
  }
 */

/**
 * 정적 라우트
 */
const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index'),
  //   hidden: true
  // },
  {
    path: '/404',
    component: () => import('@/layout/components/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    prefix: true,
    meta: {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      breadcrumb: true,
      menu_id: 'M1100'
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/main/dashboard1'),
        meta: {
          title: 'Dashboard_',
          icon: 'mdi-help-circle'
        }
      }
    ]
  }
]

// ? 동적 라우트 임포트
import Introduction from '@/router/modules/info'
import Library from '@/router/modules/library'
import Tags from '@/router/modules/tags'
import Tweet from '@/router/modules/tweet'
// import UiComponentsRoutes from '@/router/modules/component'

//* 기본 정적 라우트
export const defaultRoutes = constantRoutes
//* 동적으로 구성될 라우트 (신규 메뉴 추가시에 라우터를 여기 추가한다, 동적 라우터는 최초 라우터 등록시에 사용되지 않는다)
// ? 동적 라우터를 여기에 모두 추가해놓고, 권한 별 메뉴 API를 통해 받은 메뉴정보와 asyncRoutes 에 등록한 동적 라우터들의 정보와 매칭하여 메뉴를 구성할때 사용한다.
// ? 예시: src/permission.js 참고
export const asyncRoutes = [
  Introduction,
  Library,
  Tags,
  Tweet,
  { path: '*', redirect: '/404', hidden: true }
]

//* 라우트 리셋
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// ? 라우터 생성
const createRouter = () =>
  new Router({
    mode: 'history', // ? history 모드 사용시 브라우저 주소창에 해시태그가 남지 않는다.
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes //! 기본 라우터는 정적 라우터만 등록한다.
  })

const router = createRouter()

export default router
