import Head from "next/head"
import React, { FunctionComponent } from "react"

export const PageHead: FunctionComponent<{}> = () => {
  return (
    <Head>
      <title>Alexander Christie - Head of Engineering at Attio</title>
      <meta
        name="description"
        content="Hi there! I'm Alex - a full-stack engineer with a focus on backend system architecture and security. I'm currently the Head of Engineering at Attio."
        key="description"
      />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
        rel="stylesheet"
      />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
    </Head>
  )
}
