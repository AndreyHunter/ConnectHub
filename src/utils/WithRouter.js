import { useParams, useLocation, useNavigate } from 'react-router-dom';

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }

    return ComponentWithRouterProp;
}
