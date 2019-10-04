import React from 'react'
import { Link, Svg } from './styles'

export const Logo = props => {
  const { fixed } = props
  return (<Link to='/'>
  { !fixed ? <Svg
    width={387.837}
    height={122}
    viewBox="56.081 14 387.837 122"
    style={{
      background: '0 0',
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__editing-rainbow-gradient"
        x2={1}
        y1={0.5}
        y2={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="red" />
        <stop offset={0.17} stopColor="#f90" />
        <stop offset={0.34} stopColor="#ff4" />
        <stop offset={0.51} stopColor="#9f0" />
        <stop offset={0.68} stopColor="#09f" />
        <stop offset={0.85} stopColor="#00f" />
        <stop offset={1} stopColor="#90f" />
      </linearGradient>
      <filter
        id="prefix__editing-rainbow"
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
      >
        <feMorphology
          operator="dilate"
          radius="1,2"
          in="SourceGraphic"
          result="dilate"
        />
        <feColorMatrix
          in="dilate"
          result="color"
          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0"
        />
        <feOffset dy={2} result="offset" />
        <feGaussianBlur stdDeviation={3} />
        <feOffset dy={3} />
        <feColorMatrix
          result="blur"
          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0"
        />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="offset" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M30.91-4.38q-2.69 2.72-6.37 4.19-3.68 1.47-7.32 1.47-3.65 0-4.93-.64L10.3 11.52-2.69 12.8l8.83-45.44 10.44-1.09-.84 4.42q2.69-4.55 8.26-4.55 6.27 0 9.6 4.04 2.94 3.64 2.94 9.21t-1.47 9.54Q33.6-7.1 30.91-4.38zM16.45-22.34L13.06-3.58q1.34 1.15 3 1.15 1.67 0 2.63-.64t1.66-1.92q1.92-3.46 3.46-13.95.45-3.08.45-6.08 0-3.01-.68-3.97-.67-.96-1.95-.96-3.9 0-5.18 7.61zM66.3-10.82q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zM75.46-6.4q0-1.73.89-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h5l-.58 2.88h-4.93l-3.26 17.28q-.83 3.97-.83 5.31 0 3.07 2.68 3.71Q90.3-1.28 88 0q-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63zm26.36-20.35q2.18-3.07 5.48-5.12 3.29-2.05 7.32-2.05 4.04 0 5.96 1.28l12.54-1.28-4.35 24.58q-2.24 12.54-6.98 17.47-4.54 4.67-13.37 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.98-4.13 1.98-1.51 5.06-1.51 2.68 0 4.73 1.22 1.22.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.71-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.16-2.17-2.63-2.18-2.63-7.3 0-3.2 1.09-6.81 1.09-3.62 3.26-6.69zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.27-16.44q-.32-.07-.64-.2-.64-.25-1.48-.25-3.9 0-6.2 6.4-1.8 4.99-1.8 11.13zm45.51-4.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.17 6.02L147.33 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.15 6.46q3.13-6.46 10.17-6.46 3.71 0 5.73 1.92 2.02 1.92 2.02 5.86 0 3.93-2.6 6.43-2.59 2.49-7 2.49-1.92 0-2.69-.76zm16.09 16.06q-1.5-1.66-2.17-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.26 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.34 1.28-4.96 1.28t-4.38-.99q-1.76-.99-2.28-2.66-1.02 1.6-3.2 2.63-2.17 1.02-5.08 1.02-2.92 0-5.28-.77-2.37-.77-3.88-2.43zm13.51-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.04 0 3.55-1.95 1.5-1.95 2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.93.51-1.66 1.67zm69.98 29.18q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.54 2.2-2.24 6.62L239.23 0l-12.48 1.28 3.46-17.41q.57-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L220.16 0l-12.61 1.28 6.72-33.92 10.43-1.28-1.08 6.46q1.66-3.45 4.73-4.96 3.07-1.5 7.87-1.5 2.76 0 4.55 1.34 1.79 1.35 2.37 3.52 1.08-2.24 3.87-3.55 2.78-1.31 6.21-1.31 3.42 0 5.12.74 1.69.73 2.72 1.95 1.72 2.24 1.72 6.33 0 4.04-1.72 12.42-.9 4.1-.9 5.6t.86 2.4q.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28z"
      fill="url(#prefix__editing-rainbow-gradient)"
      transform="translate(117.979 100.96)"
      filter="url(#prefix__editing-rainbow)"
    />
    <style />
  </Svg>
  :
  <Svg
  width={145.566}
  height={54.786}
  viewBox="177.217 47.607 145.566 54.786"
  style={{
    background: '0 0',
  }}
  preserveAspectRatio="xMidYMid"
  {...props}
  >
  <defs>
    <linearGradient
      id="prefix__editing-rainbow-gradient"
      x2={1}
      y1={0.5}
      y2={0.5}
      gradientUnits="objectBoundingBox"
    >
      <stop offset={0} stopColor="red" />
      <stop offset={0.17} stopColor="#f90" />
      <stop offset={0.34} stopColor="#ff4" />
      <stop offset={0.51} stopColor="#9f0" />
      <stop offset={0.68} stopColor="#09f" />
      <stop offset={0.85} stopColor="#00f" />
      <stop offset={1} stopColor="#90f" />
    </linearGradient>
    <filter
      id="prefix__editing-rainbow"
      x="-100%"
      y="-100%"
      width="300%"
      height="300%"
    >
      <feMorphology
        operator="dilate"
        radius="1,2"
        in="SourceGraphic"
        result="dilate"
      />
      <feColorMatrix
        in="dilate"
        result="color"
        values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0"
      />
      <feOffset dy={2} result="offset" />
      <feGaussianBlur stdDeviation={3} />
      <feOffset dy={3} />
      <feColorMatrix
        result="blur"
        values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0"
      />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="offset" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <path
    d="M8.98-14.67q5.39 0 5.39 3.8 0 2.09-1.35 3.35-1.32 1.25-3.63 1.25-1.07 0-1.91-.62-.4-.26-.66-.61 1.61 0 2.45-.98.85-.98.85-2.89 0-1.92-1.89-1.92H7.7q-.13 0-.24.02L4.93 0H.15l2.71-14.41q2.35-.22 3.72-.24 1.36-.02 2.4-.02zM23.39-3.72q.55.38.55 1.2 0 .83-.42 1.35-.42.53-1.1.88-1.41.73-2.93.73-1.52 0-2.41-.33-.89-.33-1.48-.95-1.17-1.16-1.17-3.3 0-3.32 1.81-5.34 1.93-2.18 5.3-2.18 2.09 0 3.12.88.77.66.77 1.74 0 3.87-6.69 3.87-.08.57-.08 1.06 0 1.01.45 1.39.45.39 1.28.39.84 0 1.73-.39.89-.38 1.27-1zm-4.49-2.4q1.56 0 2.46-.96.9-.93.9-2.4 0-.51-.18-.78-.19-.28-.56-.28-.38 0-.7.15-.32.14-.65.62-.81 1.1-1.27 3.65zm7.63 3.92q0-.59.31-2.09l1.17-5.94h-1.3l.09-.66q2.64-.79 5.19-2.73h1.05l-.52 2.4h1.71l-.2.99h-1.69l-1.12 5.94q-.29 1.36-.29 1.83 0 1.05.93 1.27-.22.75-1.02 1.19-.79.44-1.91.44-1.12 0-1.76-.7-.64-.71-.64-1.94zm9.07-7q.74-1.05 1.88-1.76 1.13-.7 2.52-.7 1.38 0 2.04.44l4.31-.44-1.49 8.45q-.77 4.31-2.4 6-1.56 1.61-4.6 1.61-2.31 0-3.63-.73-1.32-.72-1.32-1.93 0-.9.68-1.42.69-.52 1.74-.52.93 0 1.63.42.42.22.62.53-.51.44-.51 1.16 0 .95.88.95 1.47 0 2.31-3.48.24-.94.44-1.89-.99 1.21-3.23 1.21-1.57 0-2.47-.75-.9-.74-.9-2.5 0-1.1.37-2.35.38-1.24 1.13-2.3zm2.86 4.71q0 1.5.77 1.5.52 0 1.03-.57.4-.47.55-1.15l1.12-5.65q-.11-.02-.22-.07-.22-.09-.5-.09-1.35 0-2.14 2.2-.61 1.72-.61 3.83zM54.1-6.18q.79-1.41.79-2.84 0-.95-.68-.95-.53 0-1.08.91-.57.9-.75 2.06l-1.14 7-4.56.44 2.25-11.66 3.63-.44-.4 2.22q1.08-2.22 3.5-2.22 1.28 0 1.97.66t.69 2.01q0 1.36-.89 2.21-.89.86-2.41.86-.66 0-.92-.26zm5.53 5.52q-.52-.57-.75-1.47-.23-.91-.23-2.38 0-1.47.51-2.82.5-1.34 1.43-2.31 1.89-2.02 5.01-2.02 1.13 0 1.94.37l3.76-.37-1.63 8.58q-.06.26-.06.75 0 .48.3.79.29.31.73.35-.22.75-1.02 1.19-.8.44-1.71.44-.9 0-1.5-.34-.61-.34-.78-.91-.36.55-1.1.9-.75.35-1.75.35T60.96.18q-.81-.27-1.33-.84zm4.64-8.93q-.25.39-.47 1.06-.22.68-.58 2.47-.37 1.79-.37 3.07 0 1.27.2 1.65.2.37.55.37.71 0 1.22-.67.52-.67.72-1.86l1.16-6.44q-.46-.4-1-.4t-.86.18q-.31.17-.57.57zM88.33.44q-2.66 0-2.66-2.07 0-.9.38-2.65.39-1.75.52-2.45.31-1.61.31-2.11 0-1.13-.84-1.13-.55 0-1.08.76-.52.76-.77 2.28L82.83 0l-4.29.44 1.19-5.98q.2-.99.37-2.12.18-1.12.18-1.29 0-1.02-.75-1.02-.51 0-1.06.75t-.85 2.29L76.27 0l-4.33.44 2.31-11.66 3.59-.44-.38 2.22q.57-1.19 1.63-1.7 1.06-.52 2.71-.52.94 0 1.56.46.61.46.81 1.21.38-.77 1.33-1.22.96-.45 2.14-.45 1.17 0 1.76.25.58.26.93.67.6.77.6 2.18 0 1.39-.6 4.27-.31 1.41-.31 1.93 0 .51.3.82.3.31.74.35-.22.75-.98 1.19-.76.44-1.75.44z"
    fill="url(#prefix__editing-rainbow-gradient)"
    transform="translate(204.387 84.027)"
    filter="url(#prefix__editing-rainbow)"
  />
  <style />

</Svg>
}
  </Link>)
}

