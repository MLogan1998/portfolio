// /* eslint-disable no-shadow */
// import React from 'react';
// import { render } from 'react-dom';
// import {
//   Switch,
//   Route,
//   useLocation,
//   BrowserRouter,
// } from 'react-router-dom';

// import { useTransition, animated } from 'react-spring';

// import { Home } from './Home/Home';
// import { Projects } from './Projects/Projects';

// export const Portfolio = () => {
//   const location = useLocation();
//   console.error(location);
//   const transitions = useTransition(location, (location) => location.pathname, {
//     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//   });

//   // eslint-disable-next-line no-shadow
//   return transitions.map(({ item: location, props, key }) => (
//     <animated.div key={key} style={props}>
//       <Switch location={location}>
//         <Route path="/" exact component={Home} />
//         <Route path="/projects" component={Projects} />
//       </Switch>
//     </animated.div>
//   ));
// };
