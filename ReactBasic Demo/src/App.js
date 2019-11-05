import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import Fragmentdemo from './FragmetsDemo/Fragemntdemo'
import Table from './FragmetsDemo/Table'
import PureComp from './Pure=component/PureComponent'
import ParentComp from './Pure=component/ParentComponent'
import RefsDemo from './Refsdemo/RefsDemo';
import FocusInput from './Refsdemo/FocusInput';
import FRParentinput from './ForwardRefsDemo/FRParentinput';
import PortalDemo from './Portaldemo/PortalDemo';
import Hero from './Errorboundarydemo/Hero';
import ErrorBoundary from './Errorboundarydemo/ErrorBoundary';
import ClickCounter from './HigherOrderComponent/ClickCounter';
import HoverCounter from './HigherOrderComponent/HoverCounter';
import HoverCount from './RenderPropsDemo/HoverCount';
import ClickCount from './RenderPropsDemo/ClickCount';
import User from './RenderPropsDemo/User';
import ComponentC from './ContextAPIDemo/ComponentC';
import { UserProvider } from './ContextAPIDemo/UserContext';

class App extends Component {
  render(){
      return (
          <div className="App">

            <UserProvider value="Umesh">
                <ComponentC />
            </UserProvider>


            {/* <Counter 
                render={ (count ,incrementCount) => (
                <ClickCount count={count} incrementCount={incrementCount} />
                )}
              />

            <Counter 
                render={ (count ,incrementCount) => (
                <HoverCount count={count} incrementCount={incrementCount} />
                )}
              />   */}


            {/* <HoverCount />
            <ClickCount />
            <User render={ (isLoggedIn) => isLoggedIn ? "Umesh" : "Guest"}/> */}


            {/* <HoverCounter />
            <ClickCounter  name="Umesh" /> */}


            {/* <ErrorBoundary>
              <Hero heroName="Batman" />
              <Hero heroName="Superman" />
              <Hero heroName="Joker" />
            </ErrorBoundary> */}
            


            {/* <PortalDemo /> */}


            {/* <FRParentinput /> */}


            {/* <FocusInput /> */}


            {/* <RefsDemo /> */}

            {/* <ParentComp /> */}

            {/*<PureComp />*/}


            {/*<Table />*/}


            {/*<Fragmentdemo />*/}


            {/*<LifecycleA />*/}


            {/*<Form />*/}


            {/*<h1 className='error'>Error</h1>                                                        
            <h1 className={styles.success}>Success</h1>*/}


            {/*<Counter />*/}


            {/*<Inline />*/}


            {/*<Stylesheet primary={true} />*/}


            {/*<NameList />*/}


            {/*<UserGreeting />*/}


            {/*<ParentComponent />*/}

            {/*<FunctionClick />*/}

            
            {/*<ClassClick />*/}


            {/*<EventBind />*/}


            {/*<Message />*/}
            

            {/*<Greet name="Bruce"  heroName="Batman">
                <p>This is children props</p>
            </Greet>
            <Greet name="clark" heroName="Superman">
              <button>Action</button>
            </Greet>
            <Greet name="Diana" heroName="Wonder Woman"/>*/}


            {/*<Welcome  name="Bruce"  heroName="Batman"/>
            <Welcome name="clark" heroName="Superman"/>
            <Welcome name="Diana" heroName="Wonder Woman"/>*/}


            {/*<Hello />*/}


          </div>
      );
  }
}

export default App;
