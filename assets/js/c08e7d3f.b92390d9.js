"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8121],{4372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(4848),i=n(8453);const a={sidebar_position:1},r="Modeling Data",s={id:"cookbook/modeling-data",title:"Modeling Data",description:"All data in Automerge must be stored in a document. A document can be modeled in a variety of ways, and there are many design patterns that can be used. An application could have many documents, typically identified by a UUID.",source:"@site/docs/cookbook/modeling-data.md",sourceDirName:"cookbook",slug:"/cookbook/modeling-data",permalink:"/docs/cookbook/modeling-data",draft:!1,unlisted:!1,editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/cookbook/modeling-data.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ephemeral Data",permalink:"/docs/repositories/ephemeral"},next:{title:"Prosemirror + React + Automerge",permalink:"/docs/cookbook/rich-text-prosemirror-react"}},c={},d=[{value:"How many documents?",id:"how-many-documents",level:2},{value:"Setting up an initial document structure",id:"setting-up-an-initial-document-structure",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Performance",id:"performance",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"modeling-data",children:"Modeling Data"}),"\n",(0,o.jsx)(t.p,{children:"All data in Automerge must be stored in a document. A document can be modeled in a variety of ways, and there are many design patterns that can be used. An application could have many documents, typically identified by a UUID."}),"\n",(0,o.jsx)(t.p,{children:"In this section, we will discuss how to model data within a particular document, including how to version and manage data with Automerge in production scenarios."}),"\n",(0,o.jsx)(t.h2,{id:"how-many-documents",children:"How many documents?"}),"\n",(0,o.jsxs)(t.p,{children:["You can decide which things to group together as one Automerge document (more fine grained or more coarse grained) based on what makes sense in your app. Having hundreds of docs should be fine \u2014 we've built prototypes of that scale. One major automerge project, ",(0,o.jsx)(t.a,{href:"https://github.com/automerge/pushpin",children:"PushPin"}),", was built around very granular documents. This had a lot of benefits, but the overhead of syncing many thousands of documents was high."]}),"\n",(0,o.jsx)(t.p,{children:"We believe on the whole there's an art to the granularity of data that is universal. When should you have two JSON documents or two SQLite databases or two rows? We suspect that an Automerge document is best suited to being a unit of collaboration between two people or a small group."}),"\n",(0,o.jsx)(t.h2,{id:"setting-up-an-initial-document-structure",children:"Setting up an initial document structure"}),"\n",(0,o.jsxs)(t.p,{children:["When you create a document using ",(0,o.jsx)(t.code,{children:"Automerge.init()"}),", it's just an empty JSON document with no properties. As the first change, most applications will need to initialize some empty collection objects that are expected to be present within the document."]}),"\n",(0,o.jsxs)(t.p,{children:["The easiest way of doing this is with a call to ",(0,o.jsx)(t.code,{children:"Automerge.change()"})," that sets up the document schema in the form that you need it, like in the code sample above. You can then ",(0,o.jsx)(t.a,{href:"/docs/cookbook/real-time/",children:"sync"})," this initial change to all of your devices; once everybody has the schema, you can have different users updating the document on different devices, and the updates should merge nicely. For example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'// Set up the `cards` array in doc1\nlet doc1 = Automerge.change(Automerge.init(), (doc) => {\n  doc.cards = [];\n});\n\n// In doc2, don\'t create `cards` again! Instead, merge\n// the schema initialization from doc1\nlet doc2 = Automerge.merge(Automerge.init(), doc1);\n\n// Now we can update both documents\ndoc1 = Automerge.change(doc1, (doc) => {\n  doc.cards.push({ title: "card1" });\n});\n\ndoc2 = Automerge.change(doc2, (doc) => {\n  doc.cards.push({ title: "card2" });\n});\n\n// The merged document will contain both cards\ndoc1 = Automerge.merge(doc1, doc2);\ndoc2 = Automerge.merge(doc2, doc1);\n'})}),"\n",(0,o.jsxs)(t.p,{children:["However, sometimes it's inconvenient to have to sync the initial change to a device before you can modify the document on that device. If you want two devices to be able to independently set up their own document schema, but still to be able to merge those documents, you have to be careful. Simply doing ",(0,o.jsx)(t.code,{children:"Automerge.change()"})," on each device to initialize the schema ",(0,o.jsx)(t.strong,{children:"will not work"}),", because you now have two different documents with no shared ancestry (even if the initial change performs the same operations, each device has a different actorId and so the changes will be different)."]}),"\n",(0,o.jsxs)(t.p,{children:["If you really must initialize each device's copy of a document independently, one option is to do the initial ",(0,o.jsx)(t.code,{children:"Automerge.change()"})," once to set up your schema, then call ",(0,o.jsx)(t.code,{children:"Automerge.save()"})," on the document (which returns a byte array), and ",(0,o.jsx)(t.em,{children:"hard-code that byte array into your application"}),". Now, on each device that needs to initialize a document, you do this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"// hard-code the initial change here\nconst initChange = new Uint8Array([133, 111, 74, 131, ...])\nlet [doc] = Automerge.load(initChange)\n"})}),"\n",(0,o.jsx)(t.p,{children:"This will set you up with a document whose initial change is the one you hard-coded. Any documents you set up with the same initial change will be able to merge."}),"\n",(0,o.jsx)(t.h2,{id:"versioning",children:"Versioning"}),"\n",(0,o.jsx)(t.p,{children:"Often, there comes a time in the production lifecycle where you will need to change the schema of a document. Because Automerge uses a JSON document model, it's similar to a NoSQL database, where properties can be arbitrarily removed and added at will."}),"\n",(0,o.jsx)(t.p,{children:"You can implement your own versioning scheme, for example by embedding a schema version number into the document, and writing a function that can upgrade a document from one schema version to the next. However, doing this in a CRDT like Automerge is more difficult than migrations in a centralized relational database, because it could happen that two users independently perform the same migration. In this case, you need to ensure that the two migrations don't clash with each other, which is difficult."}),"\n",(0,o.jsx)(t.p,{children:"One way of making migrations safe is by using the tricks from the previous section: in addition to hard-coding the initial change that sets up the document, you can also hard-code migrations that upgrade from one schema version to the next, using the same technique (either hard-coding the change as a byte array, or making a change on the fly with hard-coded actorId and timestamp). Do not modify the initial change; instead, every migration should be a separate hard-coded change that depends only on the preceding change. This way, you can have multiple devices independently applying the same migration, and they will all be compatible because the migration is performed identically on every device."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"type DocV1 = {\n  version: 1,\n  cards: Card[]\n}\n\ntype DocV2 = {\n  version: 2,\n  title: Automerge.Text,\n  cards: Card[]\n}\n\n// This change creates the `title` property required in V2,\n// and updates the `version` property from 1 to 2\nconst migrateV1toV2 = new Uint8Array([133, 111, 74, 131, ...])\n\nlet doc = getDocumentFromNetwork()\nif (doc.version === 1) {\n  [doc] = Automerge.applyChange(doc, [migrateV1toV2])\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Also keep in mind that in your app there might be some users using an old version of the app while other users are using a newer version; you will need to take care with migrations to ensure that they do not break compatibility with older app versions, or force all users to update to the latest version."}),"\n",(0,o.jsxs)(t.p,{children:["Some further ideas on safe schema migrations in CRDT apps are discussed in the ",(0,o.jsx)(t.a,{href:"https://www.inkandswitch.com/cambria",children:"Cambria"})," paper, but these are not yet implemented in Automerge. If you want to work on improving schema migrations in Automerge, please get in touch \u2014\xa0contributions are welcome!"]}),"\n",(0,o.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,o.jsx)(t.p,{children:"Automerge documents hold their entire change histories. It is fairly performant, and can handle a significant amount of data in a single document's history. Performance depends very much on your workload, so we strongly suggest you do your own measurements with the type and quantity of data that you will have in your app."}),"\n",(0,o.jsxs)(t.p,{children:["Some developers have proposed \u201cgarbage collecting\u201d large documents. If a document gets to a certain size, a central authority could emit a message to each peer that it would like to reduce it in size and only save the history from a specific change (hash). Martin Kleppmann did some experiments with a benchmark document to see how much space would be saved by discarding history, with and without preserving tombstones. See ",(0,o.jsx)(t.a,{href:"https://youtu.be/x7drE24geUw?t=3289",children:"this video at 55 minutes in"}),". The savings are not all that great, which is why we haven't prioritised history truncation so far."]}),"\n",(0,o.jsx)(t.p,{children:"Typically, performance improvements can come at the networking level. You can set up a single connection (between peers or client-server) and sync many docs over a single connection. The basic idea is to tag each message with the ID of the document it belongs to. There are possible ways of optimising this if necessary. In general, having fewer documents that a client must load over the network or into memory at any given time will reduce the synchronization and startup time for your application."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);