import './MenuItem.scss';

export default function MenuLink(props) {
    return(
        <a href={props.url}>
            <header>{props.label}</header>
        </a>
    )
}