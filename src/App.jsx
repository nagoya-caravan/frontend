import Routing from "./Routing";
import {useCreateCalender} from "./api/apis.js";

function App() {
    const {trigger, isMutating, data, error} = useCreateCalender()
    return <Routing/>;
}

export default App;
