"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome to Automerge","href":"/docs/hello","docId":"hello","unlisted":false},{"type":"link","label":"5-Minute Quick Start","href":"/docs/quickstart","docId":"quickstart","unlisted":false},{"type":"link","label":"Concepts","href":"/docs/concepts","docId":"concepts","unlisted":false},{"type":"link","label":"The JavaScript packages","href":"/docs/the_js_packages","docId":"the_js_packages","unlisted":false},{"type":"category","label":"Documents","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Simple Values","href":"/docs/documents/values","docId":"documents/values","unlisted":false},{"type":"link","label":"Counters","href":"/docs/documents/counters","docId":"documents/counters","unlisted":false},{"type":"link","label":"Lists","href":"/docs/documents/lists","docId":"documents/lists","unlisted":false},{"type":"link","label":"Text","href":"/docs/documents/text","docId":"documents/text","unlisted":false},{"type":"link","label":"Conflicts","href":"/docs/documents/conflicts","docId":"documents/conflicts","unlisted":false}],"href":"/docs/documents/"},{"type":"category","label":"Repositories","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Storage","href":"/docs/repositories/storage","docId":"repositories/storage","unlisted":false},{"type":"link","label":"Networking","href":"/docs/repositories/networking","docId":"repositories/networking","unlisted":false},{"type":"link","label":"DocHandles","href":"/docs/repositories/dochandles","docId":"repositories/dochandles","unlisted":false},{"type":"link","label":"Ephemeral Data","href":"/docs/repositories/ephemeral","docId":"repositories/ephemeral","unlisted":false}],"href":"/docs/repositories/"},{"type":"category","label":"Cookbook","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Modeling Data","href":"/docs/cookbook/modeling-data","docId":"cookbook/modeling-data","unlisted":false},{"type":"link","label":"Prosemirror + React + Automerge","href":"/docs/cookbook/rich-text-prosemirror-react","docId":"cookbook/rich-text-prosemirror-react","unlisted":false},{"type":"link","label":"Prosemirror + VanillaJS + Automerge","href":"/docs/cookbook/rich-text-prosemirror-vanilla","docId":"cookbook/rich-text-prosemirror-vanilla","unlisted":false}]},{"type":"category","label":"Under the hood","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Storage","href":"/docs/under-the-hood/storage","docId":"under-the-hood/storage","unlisted":false},{"type":"link","label":"Merge Rules","href":"/docs/under-the-hood/merge_rules","docId":"under-the-hood/merge_rules","unlisted":false}]},{"type":"link","label":"API Docs","href":"/docs/api","docId":"api","unlisted":false},{"type":"link","label":"Glossary","href":"/docs/glossary","docId":"glossary","unlisted":false}]},"docs":{"api":{"id":"api","title":"API Docs","description":"- @automerge/automerge","sidebar":"tutorialSidebar"},"concepts":{"id":"concepts","title":"Concepts","description":"This documentation is mostly focused on the javascript implementation of automerge. Some things will translate to other languages but some things - in particular the \\"repository\\" concept and automerge-repo library - will not.","sidebar":"tutorialSidebar"},"cookbook/modeling-data":{"id":"cookbook/modeling-data","title":"Modeling Data","description":"All data in Automerge must be stored in a document. A document can be modeled in a variety of ways, and there are many design patterns that can be used. An application could have many documents, typically identified by a UUID.","sidebar":"tutorialSidebar"},"cookbook/rich-text-prosemirror-react":{"id":"cookbook/rich-text-prosemirror-react","title":"Prosemirror + React + Automerge","description":"Automerge supports rich text editing on top of ProseMirror. This guide will show you how to set up a simple collaborative rich text editor in React using Automerge and ProseMirror.","sidebar":"tutorialSidebar"},"cookbook/rich-text-prosemirror-vanilla":{"id":"cookbook/rich-text-prosemirror-vanilla","title":"Prosemirror + VanillaJS + Automerge","description":"Automerge supports rich text using ProseMirror. This guide will show you how to set up a simple collaborative rich text editor in a vanilla JS app; where \\"vanilla\\" means plain JavaScript without any frameworks or libraries.","sidebar":"tutorialSidebar"},"documents/conflicts":{"id":"documents/conflicts","title":"Conflicts","description":"Automerge allows different nodes to independently make arbitrary changes to their respective copies","sidebar":"tutorialSidebar"},"documents/counters":{"id":"documents/counters","title":"Counters","description":"If you have a numeric value that is only ever changed by adding or subtracting (e.g. counting how","sidebar":"tutorialSidebar"},"documents/index":{"id":"documents/index","title":"Document Data Model","description":"Automerge documents are quite similar to JSON objects. A document always consists of a root map which is a map from strings to other automerge values, which can themselves be composite types.","sidebar":"tutorialSidebar"},"documents/lists":{"id":"documents/lists","title":"Lists","description":"JavaScript Arrays are fully supported in Automerge. You can use push, unshift, insertAt, deleteAt, splice, loops, and nested objects.","sidebar":"tutorialSidebar"},"documents/text":{"id":"documents/text","title":"Text","description":"Automerge.Text provides support for collaborative text editing. Under the hood, text is","sidebar":"tutorialSidebar"},"documents/values":{"id":"documents/values","title":"Simple Values","description":"All JSON primitive datatypes are supported in an Automerge document. In addition, JavaScript Date objects are supported.","sidebar":"tutorialSidebar"},"glossary":{"id":"glossary","title":"Glossary","description":"CRDTs","sidebar":"tutorialSidebar"},"hello":{"id":"hello","title":"Welcome to Automerge","description":"Automerge is a library of data structures for building collaborative","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"5-Minute Quick Start","description":"It\'s easy to build a local-first web application with real-time synchronization using Automerge. In this quickstart, we\'ll start with the standard yarn create vite example Typescript application and use Automerge to turn it into a simple local-first application.","sidebar":"tutorialSidebar"},"repositories/dochandles":{"id":"repositories/dochandles","title":"DocHandles","description":"Once you have a Repo with a NetworkAdapter and a StorageAdapter you can get down to the business of creating and working with DocHandles.","sidebar":"tutorialSidebar"},"repositories/ephemeral":{"id":"repositories/ephemeral","title":"Ephemeral Data","description":"Automerge encourages you to persist most of your application state. Sometimes however there is state which it doesn\'t make any sense to persist. Good reasons to not persist state are if it changes extremely fast, or is only useful to the user in the context of a live \\"session\\" of some kind. One example of such data is cursor positions in collaboratively edited text. We refer to this kind of data as \\"ephemeral data\\".","sidebar":"tutorialSidebar"},"repositories/index":{"id":"repositories/index","title":"Repositories","description":"@automerge/automerge provides a JSON-like CRDT and a sync protocol, but this still leaves a lot of plumbing to do to use it in an application. @automerge/automerge-repo is that plumbing.","sidebar":"tutorialSidebar"},"repositories/networking":{"id":"repositories/networking","title":"Networking","description":"There are many ways to talk to other peers. In automerge-repo this is captured by the NetworkAdapter interface. Unlike StorageAdapters a repository can have many (or zero) NetworkAdapters.","sidebar":"tutorialSidebar"},"repositories/storage":{"id":"repositories/storage","title":"Storage","description":"In automerge-repo \\"storage\\" refers to any implementation of StorageAdapter. You can_ run a Repo without a StorageAdapter but it will be entirely transient and will have to load all it\'s data from remote peers on every restart.","sidebar":"tutorialSidebar"},"the_js_packages":{"id":"the_js_packages","title":"The JavaScript packages","description":"The javascript API has been through several iterations and is currently split over a few libraries. This page describes how all these pieces fit together.","sidebar":"tutorialSidebar"},"under-the-hood/merge_rules":{"id":"under-the-hood/merge_rules","title":"Merge Rules","description":"It isn\'t important to understand this section to use automerge. You can just let automerge handle merging for you. But it may be interesting to understand.","sidebar":"tutorialSidebar"},"under-the-hood/storage":{"id":"under-the-hood/storage","title":"Storage","description":"In the getting started section we introduced a simple application which synchronized the value of a counter between any number of tabs. If you close all the tabs and open a new one you will see that the value of the counter is persisted. How is this working? What\'s going on?","sidebar":"tutorialSidebar"}}}')}}]);