import Card from '../Card'
import Icon from '../../Icon/Icon'
import './CardHeader.scss'

const CardHeader = ({ children,
    sideTitle = null,
    sideSubtitle = null,
    headerDirection = null,
    headerTitle = null,
    icon = "favorite",
    iconSize = 2.5,
    theme = null,
    headerSize = null,
    map = false
}) => {
    return (
        <div className={`card-header ${map ? 'map' : null}`} >

            <Card>
                <div className={`header ${map ? 'map' : null}`}>
                    <div
                        className={`title ${theme} ${map ? 'map' : null} ${headerSize}`}
                        style={{ flexDirection: headerDirection }}
                    >
                        {
                            !map
                            ? <Icon size={iconSize} icon={icon} />
                            : null
                        }
                        {headerTitle}
                    </div>
                    <div className="side-content">

                        <div className="title">{sideTitle}</div>
                        <div className="subtitle">{sideSubtitle}</div>

                    </div>
                </div>
                
                <div className="content">
                    {children}
                </div>
            </Card>

        </div>
    )
}

export default CardHeader
