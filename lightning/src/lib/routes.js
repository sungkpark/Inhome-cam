import Home  from '../pages/Home'
import Live_Camera from '../pages/Live_Camera'
import Recordings from '../pages/Recordings'
import Grid from '../pages/Grid'
import Doorbell from '../pages/Doorbell'

export default {
  root: 'home',
  routes: [
    { path: 'home',
      component: Home
    },
    { path: 'live_camera',
      component: Live_Camera
    },
    { path: 'recordings',
      component: Recordings
    },
    { path: 'grid',
      component: Grid
    },
    {
      path: 'doorbell',
      component: Doorbell
    }
  ]
}
