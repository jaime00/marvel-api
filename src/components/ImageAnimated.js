import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Image from 'react-bootstrap/Image'

export default function ImageAnimated(props) {
    const [state, toggle] = useState(true)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 0.3 : 0, config: { duration: 5000 } })
    const { path, extension } = props.thumbnail
    return (
        <animated.div
            style={{
                transform: x
                    .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate(x => `scale(${x})`)
            }}>
            <Image onClick={() => toggle(!state)} src={`${path}.${extension}`} rounded={props.rounded} />

        </animated.div>
    )
}