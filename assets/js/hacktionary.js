var Hacktionary = {};

Hacktionary.globalAttributes = {
  "accesskey": "This attribute provides a hint for generating a keyboard shortcut for the current element. ",
  "class": "This attribute is a space-separated list of the classes of the element. ",
  "contenteditable": "  This enumerated attribute indicates if the element should be editable by the user. ",
  "contextmenu": "This attribute is related to the new <a class=\"external\" href=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html\" lang=\"en\" title=\"The definition of 'contextmenu' in that specification.\">WHATWG HTML Living Standard</a>.",
  "dir": "This enumerated attribute indicates the directionality of the element's text. ",
  "draggable": "  This enumerated attribute indicates whether the element can be dragged, using the <a href=\"https://developer.mozilla.org/en/DragDrop/Drag_and_Drop\" title=\"https://developer.mozilla.org/En/DragDrop/Drag_and_Drop\">Drag and Drop API</a>. ",
  "hidden": "  This Boolean attribute indicates that the element is not yet, or is no longer, <em>relevant</em>. ",
  "id": "This attribute defines a unique identifier (ID) which must be unique in the whole document. ",
  "itemtype": " These attributes are related to the <a class=\"external\" href=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#microdata\" title=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#microdata\">HTML5 Microdata feature</a>. ",
  "lang": "This attribute participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in. ",
  "spellcheck": "  This enumerated attribute defines whether the element may be checked for spelling errors. ",
  "style": "This attribute contains <a href=\"https://developer.mozilla.org/en/CSS\" title=\"https://developer.mozilla.org/en/CSS\">CSS</a> styling declarations to be applied to the element. ",
  "tabindex": "This integer attribute indicates if the element can take input focus (is <em>focusable</em>), if it should participate to sequential keyboard navigation, and if so, at what position. ",
  "title": "This attribute contains a text representing advisory information related to the element it belongs too. "
};

Hacktionary.htmlElements = {
  "a": {
    "desc": "The HTML Anchor Element (<code>&lt;a&gt;</code>) defines a hyperlink, the named target destination for a hyperlink, or both.",
    "attrs": {
      "charset": "This attribute defines the character encoding of the linked resource.",
      "coords": "For use with object shapes, this attribute uses a comma-separated list of numbers to define the coordinates of the object on the page.",
      "datafld": "This attribute specifies the column name from that data source object that supplies the bound data.",
      "datasrc": "This attribute indicates the ID of the data source object that supplies the data that is bound to this element.",
      "href": "This is the single required attribute for anchors defining a hypertext source link.",
      "hreflang": "This attribute indicates the language of the linked resource.",
      "media": "This attribute specifies the media which the linked resource applies to.",
      "methods": "The value of this attribute provides information about the functions that might be performed on an object.",
      "name": "This attribute is required in an anchor defining a target location within a page.",
      "ping": "The support for \"ping\" was disabled starting with Firefox 3 beta 3.",
      "rel": "For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object.",
      "rev": "This attribute specifies a reverse link, the inverse relationship of the rel attribute.",
      "shape": "This attribute is used to define a selectable region for hypertext source links associated with a figure to create an image map.",
      "target": "This attribute specifies where to display the linked resource.",
      "type": "This attribute specifies the media type in the form of a MIME type for the link target.",
      "urn": "This supposedly Microsoft-supported attribute relates a uniform resource name (URN) with the link."
    }
  },
  "abbr": {
    "desc": "The HTML&nbsp;Abbreviation Element (<code>&lt;abbr&gt;</code>) represents an abbreviation and optionally provides a full description for it. If present, the <strong>title</strong> attribute must contain this full description and nothing else.",
    "attrs": {}
  },
  "address": {
    "desc": "The HTML Address&nbsp;Element (<code>&lt;address&gt;)</code> may be used by authors to supply contact information for its nearest <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/article\">&lt;article&gt;</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/body\">&lt;body&gt;</a></code>\n ancestor; in the later case, it applies to the whole document.",
    "attrs": {}
  },
  "area": {
    "desc": "The HTML <em>Area</em> element (<code>&lt;area&gt;</code>) defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/map\">&lt;map&gt;</a></code>\n element.",
    "attrs": {
      "accesskey": "Specifies a keyboard navigation accelerator for the element.",
      "alt": "A text string alternative to display on browsers that do not display images.",
      "coords": "A set of values specifying the coordinates of the hot-spot region.",
      "href": "The hyperlink target for the area.",
      "hreflang": "Indicates the language of the linked resource.",
      "name": "Define a names for the clickable area so that it can be scripted by older browsers.",
      "media": "A hint of the media for which the linked resource was designed, for example print and screen.",
      "nohref": "Indicates that no hyperlink exists for the associated area.",
      "rel": "For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object.",
      "shape": "The shape of the associated hot spot.",
      "tabindex": "A numeric value specifying the position of the defined area in the browser tabbing order.",
      "target": "This attribute specifies where to display the linked resource.",
      "type": "This attribute specifies the media type in the form of a MIME type for the link target."
    }
  },
  "article": {
    "desc": "The <em>HTML Article Element</em> (<span style=\"font-family: Courier New;\">&lt;article&gt;</span>) represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.",
    "attrs": {}
  },
  "aside": {
    "desc": "The <em>HTML Aside Element</em> (<span style=\"font-family: Courier New;\">&lt;aside&gt;</span>) represents a section of a page that consists of content that is tangentially related to the content around it, which could be considered separate from that content. Such sections are often represented as sidebars or as inserts; they often contains side explanation like a glossary definition, more loosely related stuff like advertisements, the biography of the author, or in web-applications, profile information or related blog links.",
    "attrs": {}
  },
  "audio": {
    "desc": "The <code>audio</code> element is used to embed sound content in an HTML&nbsp;or XHTML document.&nbsp; The <code>audio</code> element was added as part of HTML5.",
    "attrs": {
      "autoplay": "A Boolean attribute; if specified (even if the value is \"false\"!), the audio will automatically begin to play back as soon as it can do so without stopping to finish loading the data.",
      "autobuffer": "A Boolean attribute; if specified, the audio will automatically begin being downloaded, even if not set to automatically play.",
      "buffered": "An attribute you can read to determine which time ranges of the media have been buffered.",
      "controls": "If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.",
      "loop": "A Boolean attribute; if specified, we will, upon reaching the end of the audio, automatically seek back to the start.",
      "mozCurrentSampleOffset": "The offset, specified as the number of samples since the beginning of the audio stream, at which the audio is currently playing.",
      "muted": "A Boolean attribute which indicates whether the audio will be initially silenced.",
      "preload": "This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience.",
      "src": "The URL of the audio to embed."
    }
  },
  "b": {
    "desc": "The HTML B Element (<code>&lt;b&gt;</code>) represents a span of text stylistically different from normal text, without a conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article.",
    "attrs": {}
  },
  "base": {
    "desc": "The HTML&nbsp;<em>Base</em> element (<code>&lt;base&gt;</code>) specifies the base URL to use for all relative URLs contained within a document.&nbsp;",
    "attrs": {
      "href": "The base URL to be used throughout the document for relative URL addresses.",
      "target": "A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference."
    }
  },
  "bdi": {
    "desc": "The <em>HTML Bi-directional Isolation Element</em> (<code>&lt;bdi&gt;</code>) isolates a span of text that might be formatted in a different direction from other text outside it.",
    "attrs": {}
  },
  "bdo": {
    "desc": "The HTML Bidirectional Override Element (<span style=\"font-family: Courier New;\">&lt;bdo&gt;</span>) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality.",
    "attrs": {
      "dir": "Text direction in this element."
    }
  },
  "blockquote": {
    "desc": "The HTML <em>Block Quotation</em> (<code>&lt;blockquote&gt;</code>) element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see <a title=\"en/HTML/Element/blockquote#Notes\" rel=\"internal\" href=\"https://developer.mozilla.org/en/HTML/Element/blockquote#Notes\">Notes</a> for how to change it). A URL for the source of the quotation may be given using the <strong>cite</strong> attribute, while a text representation of the source can be given using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/cite\">&lt;cite&gt;</a></code>\n element.",
    "attrs": {
      "cite": "A URL that designates a source document or message for the information quoted."
    }
  },
  "body": {
    "desc": "The HTML&nbsp;Body (<code>&lt;body&gt;</code>) element represents the main content of an HTML&nbsp;document. There is only one <code>&lt;body&gt;</code> element in a document.",
    "attrs": {
      "alink": "Color of text for hyperlinks when selected.",
      "background": "URI of a image to use as a background.",
      "bgcolor": "Background color for the document.",
      "link": "Color of text for unvisited hypertext links.",
      "onafterprint": "Function to call after the user has printed the document.",
      "onbeforeprint": "Function to call when the user requests printing of the document.",
      "onbeforeunload": "Function to call when the document is about to be unloaded.",
      "onblur": "Function to call when the document loses focus.",
      "onerror": "Function to call when the document fails to load properly.",
      "onfocus": "Function to call when the document receives focus.",
      "onhashchange": "Function to call when the fragment identifier part (starting with the hash (#) character) of the document's current address has changed.",
      "onload": "Function to call when the document has finished loading.",
      "onmessage": "Function to call when the document has received a message.",
      "onoffline": "Function to call when network communication has failed.",
      "ononline": "Function to call when network communication has been restored.",
      "onpopstate": "Function to call when the user has navigated session history.",
      "onredo": "Function to call when the user has moved forward in undo transaction history.",
      "onresize": "Function to call when the document has been resized.",
      "onstorage": "Function to call when the storage area has changed.",
      "onundo": "Function to call when the user has moved backward in undo transaction history.",
      "onunload": "Function to call when the document is going away.",
      "text": "Foreground color of text.",
      "vlink": "Color of text for visited hypertext links."
    }
  },
  "br": {
    "desc": "The HTML&nbsp;<em>Line Break</em> element (<code>&lt;br&gt;</code>) produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.&nbsp;",
    "attrs": {
      "clear": "Indicates where to begin the next line after the break."
    }
  },
  "button": {
    "desc": "The <em>button</em> (<span style=\"font-family: Courier New;\">&lt;button&gt;</span>)&nbsp;HTML element represents a clickable button.",
    "attrs": {
      "autofocus": "This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control.",
      "disabled": "This Boolean attribute indicates that the user cannot interact with the button.",
      "form": "The form element that the button is associated with (its form owner).",
      "formaction": "The URI of a program that processes the information submitted by the button.",
      "formenctype": "If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server.",
      "formmethod": "If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form.",
      "formnovalidate": "If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted.",
      "formtarget": "If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form.",
      "name": "The name of the button, which submitted with the form data.",
      "type": "The type of the button.",
      "value": "The initial value of the button."
    }
  },
  "canvas": {
    "desc": "The <em>Canvas</em> (<code>&lt;canvas&gt;</code>) HTML element can be used to draw graphics via scripting (usually <a title=\"en/JavaScript\" rel=\"internal\" href=\"https://developer.mozilla.org/en/JavaScript\">JavaScript</a>). For example, it can be used to draw graphs, make photo compositions or even perform animations.",
    "attrs": {
      "width": " The width of the coordinate space in CSS pixels.",
      "height": "The height of the coordinate space in CSS pixels."
    }
  },
  "caption": {
    "desc": "The <em>HTML Table Caption Element</em> (<span style=\"font-family: Courier New;\">&lt;caption&gt;</span>) represents the title of a table. Though it is always the first descendant of a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/table\">&lt;table&gt;</a></code>\n, its styling, using CSS, may place it elsewhere, relative to the table.",
    "attrs": {
      "align": "This enumerated attribute indicates how the caption must be aligned with respect to the table."
    }
  },
  "cite": {
    "desc": "The HTML&nbsp;Citation Element (<span style=\"font-family: Courier New;\">&lt;cite&gt;</span>) contains the title of a work, such as a book, song, movie, TV&nbsp;show, sculpture, etc.",
    "attrs": {}
  },
  "code": {
    "desc": "The HTML Code Element (<span style=\"font-family: Courier New;\">&lt;code&gt;</span>) represents a fragment of computer code. By default, it is displayed in the browser's default monospace font.",
    "attrs": {}
  },
  "col": {
    "desc": "The <em>HTML Table Column Element</em> (<code>&lt;col&gt;</code>) defines a column within a table and is used for defining common semantic on all common cells. It is generally found within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/colgroup\">&lt;colgroup&gt;</a></code>\n element.",
    "attrs": {
      "align": "This enumerated attribute specifies how horizontal alignment of each column cell content will be handled.",
      "bgcolor": "This attribute defines the background color of each cell of the column.",
      "char": "This attribute is used to set the character to align the cells in a column on.",
      "charoff": "This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute.",
      "span": "This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans.",
      "valign": "This attribute specifies the vertical alignment of the text within each cell of the column.",
      "width": "This attribute specifies a default width for each column in the current column group."
    }
  },
  "colgroup": {
    "desc": "The <em>HTML Table Column Group Element</em> (<span style=\"font-family: Courier New;\">&lt;colgroup&gt;</span>) defines a group of column within a table.",
    "attrs": {
      "align": "This enumerated attribute specifies how horizontal alignment of each column cell content will be handled.",
      "bgcolor": "This attribute defines the background color of each cell of the columns member of the column group..",
      "char": "This attribute is used to set the character to align the cells in a column on.",
      "charoff": "This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute.",
      "span": "This attribute contains a positive integer indicating the number of additional consecutive columns to apply the attributes of the <column> element.",
      "valign": "This attribute specifies the vertical alignment of the text within each cell of the column.",
      "width": "This attribute specifies a default width for each column in the current column group."
    }
  },
  "command": {
    "desc": "The <code>command </code>element represents a command which the user can invoke.",
    "attrs": {
      "checked": "Indicates whether the command is selected.",
      "disabled": "Iindicates that the command is not available.",
      "icon": "Gives a picture which represents the command.",
      "label": "The name of the command as shown to the user.",
      "radiogroup": "This attribute gives the name of the group of commands, with a type of radio, that will be toggled when the command itself is toggled.",
      "type": "This attribute indicates the kind of command."
    }
  },
  "datalist": {
    "desc": "The <em>HTML Datalist Element</em> (<span style=\"font-family: Courier New;\">&lt;datalist&gt;</span>) contains a set of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/option\">&lt;option&gt;</a></code>\n elements that represent the possible options for the value of other controls.",
    "attrs": {}
  },
  "dd": {
    "desc": "The Definition Description Element (<span style=\"font-family: Courier New;\">&lt;dd&gt;</span>) indicates the definition of a term in a definition list (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dl\">&lt;dl&gt;</a></code>\n) element. This element can occur only as a child element of a definition list and it must follow a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dt\">&lt;dt&gt;</a></code>\n element.",
    "attrs": {
      "nowrap": "If the value of this attribute is set to yes, the definition text will not wrap."
    }
  },
  "del": {
    "desc": "The Deleted Text (<code>&lt;del&gt;</code>) HTML&nbsp;element represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text.",
    "attrs": {
      "cite": "A URI for a resource that explains the change (for example, meeting minutes).",
      "datetime": "This attribute indicates the time and date of the change and must be a valid date with an optional time string."
    }
  },
  "details": {
    "desc": "The HTML <em>details</em> element (<code>&lt;details&gt;</code>) is used as a disclosure widget from which the user the retrieve additional information.",
    "attrs": {
      "open": "This Boolean attribute indicates whether the details will be shown to the user on page load."
    }
  },
  "dfn": {
    "desc": "The Definition (<code>&lt;dfn&gt;</code>)&nbsp;HTML element represents the defining instance of a term.",
    "attrs": {}
  },
  "div": {
    "desc": "The Document Division (&lt;div&gt;) HTML&nbsp;element is generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the <strong>class</strong> or <strong>id</strong> attributes), or because they share attribute values, such as <strong>lang</strong>. It should be used only when no other semantic element (such as <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/article\">&lt;article&gt;</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/nav\">&lt;nav&gt;</a></code>\n) is appropriate.",
    "attrs": {}
  },
  "dl": {
    "desc": "The HTML <em>Definition List</em> (<code>&lt;dl&gt;</code>) element encloses a list of pairs of terms and descriptions. A common use for this element is to implement a glossary.",
    "attrs": {
      "compact": "Forces the definition description to appear at the same line as the definition term."
    }
  },
  "dt": {
    "desc": "The HTML Definition Term Element (<span style=\"font-family: Courier New;\">&lt;dt&gt;</span>) identifies a term in a definition list. This element can occur only as a child element of a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dl\">&lt;dl&gt;</a></code>\n. It is usually followed by a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dd\">&lt;dd&gt;</a></code>\n element; however, multiple <code>&lt;dt&gt;</code> elements in a row indicate several terms that are all defined by the immediate next <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/dd\">&lt;dd&gt;</a></code>\n element.",
    "attrs": {}
  },
  "em": {
    "desc": "The HTML Emphasis Element (<span style=\"font-family: Courier New;\">&lt;em&gt;</span>) marks text that has stress emphasis. The <code>&lt;em&gt;</code> element can be nested, with each level of nesting indicating a greater degree of emphasis.",
    "attrs": {}
  },
  "embed": {
    "desc": "The <em>HTML&nbsp;Embed Element</em> (<code>&lt;embed&gt;</code>) represents an integration point for an external application or interactive content (in other words, a plug-in).",
    "attrs": {
      "height": "The displayed height of the resource, in CSS pixels.",
      "src": "The URL of the resource being embedded.",
      "type": "The MIME type to use to select the plug-in to instantiate.",
      "width": "The displayed width of the resource, in CSS pixels."
    }
  },
  "fieldset": {
    "desc": "The HTML&nbsp;element<em> fieldset </em>(<span style=\"font-family: Courier New;\">&lt;fieldset&gt;</span>) is used to group several controls as well as labels (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/label\">&lt;label&gt;</a></code>\n) within a web form.",
    "attrs": {
      "disabled": "If this Boolean attribute is set, the form controls that are its descendants, except descendants of its first optional <legend>\n element, are disabled, i.e., not editable.",
      "form": "This attribute has the value of the id attribute of the <form>\n element its related to.",
      "name": "The name associated with the group, which is submitted with the form data."
    }
  },
  "figcaption": {
    "desc": "The <em>HTML Figcaption Element</em> (<code>&lt;figcaption&gt;</code>) represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/figure\">&lt;figure&gt;</a></code>\n element which is its immediate ancestor which means <code>&lt;figcaption&gt;</code> can be the first or last element inside a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/figure\">&lt;figure&gt;</a></code>\n block.&nbsp;Also, the <em>HTML Figcaption Element&nbsp;</em>is optional; if not provided, then the parent figure element will have no caption.",
    "attrs": {}
  },
  "figure": {
    "desc": "The <em>HTML Figure Element&nbsp;</em>(<span style=\"font-family: Courier New;\">&lt;figure&gt;</span>) represents self-contained content, frequently with a caption&nbsp;(<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/figcaption\">&lt;figcaption&gt;</a></code>\n)<em><code>,</code></em> and is&nbsp;typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow.",
    "attrs": {}
  },
  "footer": {
    "desc": "The <em>HTML Footer Element</em> (<span style=\"font-family: Courier New;\">&lt;footer&gt;</span>) represents a footer for its nearest sectioning content or <a title=\"en/Sections and Outlines of an HTML5 document#sectioning root\" rel=\"internal\" href=\"https://developer.mozilla.org/en/Sections_and_Outlines_of_an_HTML5_document#sectioning_root\">sectioning root</a> element (i.e, its nearest parent <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/article\">&lt;article&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/aside\">&lt;aside&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/nav\">&lt;nav&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/section\">&lt;section&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/blockquote\">&lt;blockquote&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/body\">&lt;body&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/details\">&lt;details&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/fieldset\">&lt;fieldset&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/figure\">&lt;figure&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/td\">&lt;td&gt;</a></code>\n). A footer typically contains information about the author of the section, copyright data or links to related documents.",
    "attrs": {}
  },
  "form": {
    "desc": "The <em>form</em> (&lt;form&gt;) HTML&nbsp;element represents a section of document that contains interactive controls that enable a user to submit information to a web server.",
    "attrs": {
      "accept": "A comma-separated list of content types that the server accepts.",
      "accept-charset": "A list of character encodings that the server accepts.",
      "action": "The URI of a program that processes the information submitted via the form.",
      "autocomplete": "Indicates whether controls in this form can by default have their values automatically completed by the browser.",
      "enctype": "When the value of the method attribute is post, this attribute is the MIME type of content that is used to submit the form to the server.",
      "method": "The HTTP method that the browser uses to submit the form.",
      "name": "The name of the form.",
      "novalidate": "This Boolean attribute indicates that the form is not to be validated when it is submitted.",
      "target": "A name or keyword indicating where to display the response that is received after submitting the form."
    }
  },
  "h1": {
    "desc": "<strong>Heading</strong> elements implement six levels of document headings, <code>&lt;h1&gt;</code> is the most important and <code>&lt;h6&gt;</code> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
    "attrs": {}
  },
  "head": {
    "desc": "The HTML <code>&lt;head&gt;</code> element represents a collection of metadata about the document, including links to or definitions of scripts and style sheets.",
    "attrs": {
      "profile": "The URIs of one or more metadata profiles, separated by white space."
    }
  },
  "header": {
    "desc": "The <em>HTML Header Element</em> (<code>&lt;header&gt;</code>) represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.",
    "attrs": {}
  },
  "hgroup": {
    "desc": "The <em>HTML Headings Group Element</em> (<span style=\"font-family: Courier New;\">&lt;hgroup&gt;</span>) represents the heading of a section. It defines a single title that participates in <a title=\"en/Sections and Outlines of an HTML5 document\" rel=\"internal\" href=\"https://developer.mozilla.org/en/Sections_and_Outlines_of_an_HTML5_document\">the outline of the document</a> as the heading of the implicit or explicit section that it belongs too.",
    "attrs": {}
  },
  "hr": {
    "desc": "In \n<span style=\"border: 1px solid rgb(129, 129, 250); background-color: rgb(174, 218, 229); font-size: x-small; white-space: nowrap; padding: 2px;\"><a rel=\"custom\" href=\"/en/HTML/HTML5\">HTML5</a></span> the &lt;hr&gt; element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.",
    "attrs": {
      "align": "",
      "color": "Sets the color of the rule through color name or hexadecimal value.",
      "noshade": "",
      "size": "",
      "width": "Sets the length of the rule on the page through a pixel or percentage value."
    }
  },
  "html": {
    "desc": "The HTML root element (<span style=\"font-family: Courier New;\">&lt;html&gt;</span>) represents the root of an HTML or XHTML document. All other elements must be descendants of this element.",
    "attrs": {
      "manifest": "Specifies the URI of a resource manifest indicating resources that should be cached locally.",
      "version": "Specifies the version of the HTML Document Type Definition that governs the current document."
    }
  },
  "i": {
    "desc": "The HTML Offset Text (or Italics) Element (<span style=\"font-family: Courier New;\">&lt;i&gt;</span>) represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.",
    "attrs": {}
  },
  "iframe": {
    "desc": "The HTML&nbsp;inline frame element (<code>&lt;iframe&gt;</code>) represents a nested browsing context, effectively embedding another HTML page into the current page. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the <dfn id=\"parent\">parent</dfn> browsing context. The <dfn id=\"top-level\">top-level</dfn> browsing context (which has no parent) is typically the browser window.",
    "attrs": {
      "align": "The alignment of this element with respect to the surrounding context.",
      "frameborder": "The value 1 (the default) tells the browser to draw a border between this frame and every other frame.",
      "height": "Indicates the height of the frame \nHTML5 in CSS pixels, or \nHTML 4.01 in pixels or as a percentage.",
      "longdesc": "A URI of a long description of the frame.",
      "marginheight": "The amount of space in pixels between the frame's content and its top and bottom margins.",
      "marginwidth": "The amount of space in pixels between the frame's content and its left and right margins.",
      "mozallowfullscreen": "In Gecko 9.0 or later, this attribute can be set to true if the frame is allowed to be placed into full screen mode by calling its element.mozRequestFullScreen()\n method.",
      "webkitallowfullscreen": "In Chrome 17 or later (and maybe earlier), this attribute can be set to true if the frame is allowed to be placed into full screen mode by calling its element.webkitRequestFullScreen()\n method.",
      "name": "A name for the embedded browsing context (or frame).",
      "scrolling": "Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:  auto: Only when needed.",
      "sandbox": "If specified as an empty string, this attribute enables extra restrictions on the content that can appear in the inline frame.",
      "seamless": "This Boolean attribute indicates that the browser should render the inline frame in a way that makes it appear to be part of the containing document, for example by applying CSS styles that apply to the <iframe> to the contained document before styles specified in that document, and by opening links in the contained documents in the parent browsing context (unless another setting prevents this).",
      "src": "The URL of the page to embed.",
      "srcdoc": "The content of the page that the embedded context is to contain.",
      "width": "Indicates the width of the frame \nHTML5 in CSS pixels, or \nHTML 4.01 in pixels or as a percentage."
    }
  },
  "img": {
    "desc": "The HTML Image Element (<code>&lt;img&gt;</code>) represents an image to the document.",
    "attrs": {
      "align": "The alignment of the image with respect to its surrounding context.",
      "alt": "This attribute defines the alternative text describing the image.",
      "border": "The width of a border around the image.",
      "crossorigin": "This enumerated attribute indicates if the fetching of the related image must be done using CORS or not.",
      "height": "The height of the image in \nHTML5 CSS pixels, or \nHTML 4 in pixels or as a percentage.",
      "hspace": "The number of pixels of white space to insert to the left and right of the image.",
      "ismap": "This Boolean attribute indicates that the image is part of a server-side map.",
      "longdesc": "The URL of a description of the image to be displayed, which supplements the alt text.",
      "name": "A name for the element.",
      "src": "Image URL, this attribute is obligatory for the <img> element.",
      "width": "The width of the image in pixels or percent.",
      "usemap": "The partial URL (starting with '#') of an image map associated with the element.",
      "vspace": "The number of pixels of white space to insert to above and below the image."
    }
  },
  "input": {
    "desc": "The <em>input</em> (<code>&lt;input&gt;</code>) element is used to create interactive controls for web-based forms.",
    "attrs": {
      "type": "The type of control to display.",
      "accept": "If the value of the type attribute is file, this attribute indicates the types of files that the server accepts; otherwise it is ignored.",
      "accesskey": "A single-character that the user can press to switch input focus to the control.",
      "mozactionhint": "Specifies an \"action hint\" used to determine how to label the enter key on mobile devices with virtual keyboards.",
      "autocomplete": "This attribute indicates whether the value of the control can be automatically completed by the browser.",
      "autofocus": "This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control.",
      "checked": "When the value of the type attribute is radio or checkbox, the presence of this Boolean attribute indicates that the control is selected by default; otherwise it is ignored.",
      "disabled": "This Boolean attribute indicates that the form control is not available for interaction.",
      "form": "The form element that the input element is associated with (its form owner).",
      "formaction": "The URI of a program that processes the information submitted by the input element, if it is a submit button or image.",
      "formenctype": "If the input element is a submit button or image, this attribute specifies the type of content that is used to submit the form to the server.",
      "formmethod": "If the input element is a submit button or image, this attribute specifies the HTTP method that the browser uses to submit the form.",
      "formnovalidate": "If the input element is a submit button or image, this Boolean attribute specifies that the form is not to be validated when it is submitted.",
      "formtarget": "If the input element is a submit button or image, this attribute is a name or keyword indicating where to display the response that is received after submitting the form.",
      "height": " If the value of the type attribute is image, this attribute defines the height of the image displayed for the button.",
      "list": "Identifies a list of pre-defined options to suggest to the user.",
      "max": "The maximum (numeric or date-time) value for this item, which must not be less than its minimum (min attribute) value.",
      "maxlength": "If the value of the type attribute is text, email, search, password, tel, or url,  this attribute specifies the maximum number of characters (in Unicode code points) that the user can enter; for other control types, it is ignored.",
      "min": "The minimum (numeric or date-time) value for this item, which must not be greater than its maximum (max attribute) value.",
      "multiple": "This Boolean attribute indicates whether the user can enter more than one value.",
      "name": "The name of the control, which is submitted with the form data.",
      "pattern": "A regular expression that the control's value is checked against.",
      "placeholder": "A hint to the user of what can be entered in the control .",
      "readonly": "This Boolean attribute indicates that the user cannot modify the value of the control.",
      "required": "This attribute specifies that the user must fill in a value before submitting a form.",
      "selectionDirection": "The direction in which selection occurred.",
      "size": "The initial size of the control.",
      "src": "If the value of the type attribute is image, this attribute specifies a URI for the location of an image to display on the graphical submit button; otherwise it is ignored.",
      "step": "Works with the min and max attributes to limit the increments at which a numeric or date-time value can be set.",
      "tabindex": "The position of the element in the tabbing navigation order for the current document.",
      "usemap": "The name of a <map>\n element to as an image map.",
      "value": "The initial value of the control.",
      "width": " If the value of the type attribute is image, this attribute defines the width of the image displayed for the button.",
      "x-moz-errormessage": "This Mozilla extension allows you to specify the error message to display when a field doesn't successfully validate."
    }
  },
  "ins": {
    "desc": "The <em>HTML&nbsp;Inserted Text</em> (<code>&lt;ins&gt;</code>) HTML represents a range of text that has been added to a document.",
    "attrs": {
      "cite": "This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem.",
      "datetime": "This attribute indicates the time and date of the change and must be a valid date with an optional time string."
    }
  },
  "kbd": {
    "desc": "The HTML Keyboard Input Element (<span style=\"font-family: Courier New;\">&lt;kbd&gt;</span>) produces an inline element displayed in the browser's default monotype font. This element is used to identify user input.",
    "attrs": {}
  },
  "keygen": {
    "desc": "The HTML <code>keygen</code> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <code>keygen</code> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.",
    "attrs": {
      "autofocus": "This Boolean attribute lets you specify that the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control.",
      "challenge": "A challenge string that is submitted along with the public key.",
      "disabled": "This Boolean attribute indicates that the form control is not available for interaction.",
      "form": "The form element that this element is associated with (its form owner).",
      "keytype": "The type of key generated.",
      "name": "The name of the control, which is submitted with the form data."
    }
  },
  "label": {
    "desc": "The <em>HTML Label Element</em> (<code>&lt;label&gt;</code>) represents a caption for an item in a user interface. It can be associated with a control either by using the <code>for</code> attribute, or by placing the control element inside the <code>label</code> element. Such a control is called the <em>labeled control</em> of the label element.",
    "attrs": {
      "accesskey": "A shortcut key to access this element from the keyboard.",
      "for": "The ID of a labelable form-related element in the same document as the label element.",
      "form": "The form element that the label element is associated with (its form owner)."
    }
  },
  "legend": {
    "desc": "The <em>HTML Legend Field Element</em> (<span style=\"font-family: Courier New;\">&lt;legend&gt;</span>) represents a caption for the content of its parent <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/fieldset\">&lt;fieldset&gt;</a></code>\n.",
    "attrs": {}
  },
  "li": {
    "desc": "The <em>HTML List item element</em> (<code>&lt;li&gt;</code>) is used to represent a list item. It should be contained in an ordered list (<a href=\"/en-US/docs/Web/HTML/Element/ol\"><code>&lt;ol&gt;</code></a>), an unordered list (<a href=\"/en-US/docs/Web/HTML/Element/ul\"><code>&lt;ul&gt;</code></a>) or a menu (<a href=\"/en-US/docs/Web/HTML/Element/menu\"><code>&lt;menu&gt;</code></a>), where it represents a single entity in that list.",
    "attrs": {}
  },
  "link": {
    "desc": "The <em>HTML Link Element</em> (&lt;link&gt;) specifies relationships between the current document and other documents. Possible uses for this element include defining a relational framework for navigation and linking the document to a style sheet.",
    "attrs": {
      "charset": "This attribute defines the character encoding of the linked resource.",
      "disabled": "This attribute is used to disable a link relationship.",
      "href": "This attribute specifies the URL of the linked resource.",
      "hreflang": "This attribute indicates the language of the linked resource.",
      "media": "This attribute specifies the media which the linked resource applies to.",
      "methods": "The value of this attribute provides information about the functions that might be performed on an object.",
      "rel": "This attribute names a relationship of the linked document to the current document.",
      "rev": "The value of this attribute shows the relationship of the current document to the linked document, as defined by the \n\nhref\n attribute.",
      "sizes": "This attribute defines the sizes of the icons for visual media contained in the resource.",
      "target": "Defines the frame or window name that has the defined linking relationship or that will show the rendering of any linked resource.",
      "type": "This attribute is used to define the type of the content linked to."
    }
  },
  "map": {
    "desc": "The HTML <em>Map</em> element (<code>&lt;map&gt;</code>) is used with <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/area\">&lt;area&gt;</a></code>\n elements to define a image map.",
    "attrs": {}
  },
  "mark": {
    "desc": "The <em>HTML Mark Element</em> (<span style=\"font-family: Courier New;\">&lt;mark&gt;</span>) represents highlighted text, i.e., a run of text marked for reference purpose, due to its <em>relevance</em> in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched for word.",
    "attrs": {}
  },
  "menu": {
    "desc": "The HTML <em>menu</em> element (<code>&lt;menu&gt;</code>) represents an unordered list of menu choices, or commands.",
    "attrs": {
      "type": "Used to indicate the kind of menu being declared.",
      "label": "Gives the label of the menu."
    }
  },
  "meta": {
    "desc": "The <em>HTML Meta Element</em> (<code>&lt;meta&gt;</code>) represents any metadata information which cannot be represented using one of the other meta-related element (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/base\">&lt;base&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/link\">&lt;link&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/script\">&lt;script&gt;</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/style\">&lt;style&gt;</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/title\">&lt;title&gt;</a></code>\n).",
    "attrs": {
      "charset": "This attribute declares the character encoding used of the page.",
      "content": "This attribute gives the value associated with the \n\nhttp-equiv\n or \n\nname\n attribute, depending of the context.",
      "http-equiv": "This enumerated attribute defines the pragma that can alter servers and user-agents behavior.",
      "name": "This attribute defines the name of a document-level metadata.",
      "scheme": "This attribute defines the scheme in which the metadata is described."
    }
  },
  "meter": {
    "desc": "The HTML <em>meter</em> element (<code>&lt;meter&gt;</code>) represents either a scalar value within a known range or a fractional value.",
    "attrs": {
      "value": "The current numeric value.",
      "min": "The lower numeric bound of the measured range.",
      "max": "The upper numeric bound of the measured range.",
      "low": "The upper numeric bound of the low end of the measured range.",
      "high": "The lower numeric bound of the high end of the measured range.",
      "optimum": "This attribute indicates the optimal numeric value.",
      "form": "This attribute associates the element with a form element that has ownership of the meter element."
    }
  },
  "nav": {
    "desc": "The <em>HTML Navigation Element</em> (<code>&lt;nav&gt;</code>) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.",
    "attrs": {}
  },
  "noscript": {
    "desc": "The HTML NoScript Element (<code>&lt;noscript&gt;</code>) defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.",
    "attrs": {}
  },
  "object": {
    "desc": "The Embedded Object (&lt;object&gt;) element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.",
    "attrs": {
      "archive": "A space-separated list of URIs for archives of resources for the object.",
      "border": "The width of a border around the control, in pixels.",
      "classid": "The URI of the object's implementation.",
      "codebase": "The base path used to resolve relative URIs specified by classid, data, or archive.",
      "codetype": "The content type of the data specified by classid.",
      "data": "The address of the resource as a valid URL.",
      "declare": "The presence of this Boolean attribute makes this element a declaration only.",
      "form": "The form element, if any, that the object element is associated with (its form owner).",
      "height": "The height of the displayed resource, in CSS pixels.",
      "name": "The name of valid browsing context (HTML5), or the name of the control (HTML 4).",
      "standby": "A message that the browser can show while loading the object's implementation and data.",
      "tabindex": "The position of the element in the tabbing navigation order for the current document.",
      "type": "The MIME type of the resource specified by data.",
      "usemap": "A hash-name reference to a <map>\n element; that is a '#' followed by the value of a \n\nname\n of a map element.",
      "width": "The width of the display resource, in CSS pixels."
    }
  },
  "ol": {
    "desc": "The HTML <em>ordered list</em> element (<code>&lt;ol&gt;</code>) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-type\">list-style-type</a></code>\n property.",
    "attrs": {
      "compact": "This Boolean attribute hints that the list should be rendered in a compact style.",
      "reversed": "This Boolean attribute specifies that the items of the item are specified in the reverse order, i.e.",
      "start": "This integer attribute specifies the start value for numbering the individual list items.",
      "type": "Indicates the numbering type:  'a' indicates lowercase letters,  ' A' indicates uppercase letters, 'i' indicates lowercase Roman numerals, 'I' indicates uppercase Roman numerals, and '1' indicates numbers."
    }
  },
  "optgroup": {
    "desc": "In a web form, the HTML <em>optgroup</em> element (&lt;optgroup&gt;) creates a grouping of options within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/select\">&lt;select&gt;</a></code>\n element.",
    "attrs": {
      "disabled": "If this Boolean attribute is set, none of the items in this option group is selectable.",
      "label": "The name of the group of options, which the browser can use when labeling the options in the user interface."
    }
  },
  "option": {
    "desc": "In a web form, the HTML<em> option </em>element (<span style=\"font-family: Courier New;\">&lt;option&gt;</span>) is used to create a control representing an item within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/select\">&lt;select&gt;</a></code>\n, an <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/optgroup\">&lt;optgroup&gt;</a></code>\n or a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/datalist\">&lt;datalist&gt;</a></code>\n HTML5 element.",
    "attrs": {
      "disabled": "If this Boolean attribute is set, this option is not checkable.",
      "label": "This attribute is text for the label indicating the meaning of the option.",
      "selected": "If present, this Boolean attribute indicates that the option is initially selected.",
      "value": "The textual content of this attribute represents the label explaining the option."
    }
  },
  "output": {
    "desc": "The <em>output</em> (&lt;output&gt;) element represents the result of a calculation.",
    "attrs": {
      "for": "A list of IDs of other elements, indicating that those elements contributed input values to (or otherwise affected) the calculation.",
      "form": "The form element that this element is associated with (its \"form owner\").",
      "name": "The name of the element."
    }
  },
  "p": {
    "desc": "<strong>Paragraph</strong> element (&lt;p&gt;) represents a paragraph. It is the most commonly used block-level element.",
    "attrs": {}
  },
  "param": {
    "desc": "<strong>Parameter </strong>element which defines parameters for <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/object\">&lt;object&gt;</a></code>\n.",
    "attrs": {
      "name": "Name of the parameter.",
      "type": "Only used if the valuetype is set to \"ref\".",
      "value": "Value of the parameter.",
      "valuetype": ""
    }
  },
  "pre": {
    "desc": "This element represents preformatted text. Text within this element is typically displayed in a non-proportional font exactly as it is laid out in the file. Whitespaces inside this element are displayed as typed.",
    "attrs": {}
  },
  "progress": {
    "desc": "The HTML <em>progress</em> (<code>&lt;progress&gt;</code>) element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar.",
    "attrs": {
      "form": "This attribute specifies the form which the progress element belongs to.",
      "max": "This attribute describes how much work the task indicated by the progress element requires.",
      "value": "This attribute specifies how much of the task that has been completed."
    }
  },
  "q": {
    "desc": "The <strong>quote</strong> element indicates that the enclosed text is a short inline quotation.",
    "attrs": {
      "cite": "The value of this attribute is a URL that designates a source document or message for the information quoted."
    }
  },
  "s": {
    "desc": "The <em>HTML&nbsp;Strikethrough Element</em> (<span style=\"font-family: Courier New;\">&lt;s&gt;</span>) renders text with a strike-through, or a line through it. Use the <code>&lt;s&gt;</code> element to represent things that are no longer relevant or no longer accurate. However, <code>&lt;s&gt;</code> is not appropriate when indicating document edits; for that, use the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/del\">&lt;del&gt;</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/ins\">&lt;ins&gt;</a></code>\n elements, as appropriate.",
    "attrs": {}
  },
  "samp": {
    "desc": "The HTML Sample Text Element (<span style=\"font-family: Courier New;\">&lt;samp&gt;</span>) produces an inline element displayed in the browser's default monotype font (Lucida Console). This element was intended to identify sample output from a computer program.",
    "attrs": {}
  },
  "script": {
    "desc": "The <code>script</code> element is used to embed or reference an executable script within an <abbr title=\"Hypertext Markup Language\">HTML</abbr> or <abbr title=\"Extensible Hypertext Markup Language\">XHTML</abbr> document.",
    "attrs": {
      "async": "Set this Boolean attribute to indicate that the browser should, if possible, execute the script asynchronously.",
      "src": "This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.",
      "type": "This attribute identifies the scripting language of code embedded within a script element or referenced via the element’s src attribute.",
      "language": "Like the type attribute, this attribute identifies the scripting language in use.",
      "defer": "This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed."
    }
  },
  "section": {
    "desc": "The <em>HTML Section Element</em> (<code>&lt;section&gt;</code>) represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading.",
    "attrs": {}
  },
  "select": {
    "desc": "The <em>select</em> (<code>&lt;select&gt;</code>) HTML element represents a control that presents menu of options. The options within the menu are represented by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/option\">&lt;option&gt;</a></code>\n elements, which can be grouped by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/optgroup\">&lt;optgroup&gt;</a></code>\n elements. Options can be pre-selected for the user.",
    "attrs": {
      "autofocus": "This attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control.",
      "disabled": "This Boolean attribute indicates that the user cannot interact with the control.",
      "form": "The form element that the select element is associated with (its \"form owner\").",
      "multiple": "This Boolean attribute indicates that multiple options can be selected in the list.",
      "selectedIndex": "The index of the selected <option>\n element.",
      "name": "The name of the control.",
      "required": "A Boolean attribute indicating that an option with a non-empty string value must be selected.",
      "size": "If the control is presented as a scrolled list box, this attribute represents the number of rows in the list that should be visible at one time."
    }
  },
  "small": {
    "desc": "The HTML Small Element (<span style=\"font-family: Courier New;\">&lt;small&gt;</span>) makes the text <em>font size</em> one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.",
    "attrs": {}
  },
  "source": {
    "desc": "The <code>source</code> element is used to specify multiple media resources for <code> audio</code> and <code>video</code> elements in HTML5. It is an empty element. It is commonly used to serve the same media in <a title=\"En/Media formats supported by the audio and video elements\" rel=\"internal\" href=\"https://developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements\">multiple formats supported by different browsers</a>.",
    "attrs": {
      "src": "Required, address of the media resource.",
      "type": "The MIME-type of the resource, optionally with a codecs parameter.",
      "media": "Media query of the resource's intended media."
    }
  },
  "span": {
    "desc": "This HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the <strong>class</strong> or <strong>id</strong> attributes), or because they share attribute values, such as <strong>lang</strong>. It should be used only when no other semantic element is appropriate. &lt;span&gt; is very much like a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/div\">&lt;div&gt;</a></code>\n element, but <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/div\">&lt;div&gt;</a></code>\n is a block-level element whereas a &lt;span&gt; is an inline element.",
    "attrs": {}
  },
  "strong": {
    "desc": "The HTML Strong Element (<span style=\"font-family: Courier New;\">&lt;strong&gt;</span>) gives text strong emphasis, typically this is displayed in bold.",
    "attrs": {}
  },
  "style": {
    "desc": "Style element contains style information for a document. Style information should go inside of this element, usually in the CSS language (see <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a>).",
    "attrs": {
      "type": "This attribute defines the styling language as a MIME type (charset should not be specified).",
      "media": "Which media should this style apply to.",
      "scoped": "If this attribute is present, then style applies only to its parent element.",
      "title": "Specifies alternative style sheet sets.",
      "disabled": "If set, disables (does not apply) the style rules to the Document that are specified within the element."
    }
  },
  "sub": {
    "desc": "The <em>HTML Subscript Element</em> (<code>&lt;sub&gt;</code>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text.",
    "attrs": {}
  },
  "summary": {
    "desc": "The HTML <em>summary </em>element (<code>&lt;summary&gt;</code>) is used as a summary, caption or legend for the content of a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/details\">&lt;details&gt;</a></code>\n element.",
    "attrs": {}
  },
  "sup": {
    "desc": "The <em>HTML Superscript Element</em> (<code>&lt;sup&gt;</code>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text.",
    "attrs": {}
  },
  "table": {
    "desc": "The <em>HTML Table Element </em>(<code>&lt;table&gt;</code>) represents data in two dimensions or more.",
    "attrs": {
      "align": " This enumerated attribute indicates how the table must be aligned in regard of the containing document.",
      "bgcolor": "This attribute defines the background color of the table and its content.",
      "border": "This integer attribute defines, in pixels, the size of the frame surrounding the table.",
      "cellpadding": "This attribute defines the space between the content of a cell and the border, displayed or not, of it.",
      "cellspacing": "This attribute defines the size, in percentage or in pixels, of the space between two cells (both horizontally and vertically), between the top of the table and the cells of the first row, the left of the table and the first column, the right of the table and the last column and the bottom of the table and the last row.",
      "frame": "This enumerated attribute defines which side of the frame surrounding the table must be displayed.",
      "rules": "This enumerated attribute defines where rules, i.e.",
      "summary": "This attribute defines an alternative text use to describe the table in user-agent unable to display it.",
      "width ": "This attribute defines the width of the table."
    }
  },
  "tbody": {
    "desc": "The <em>HTML Table Body Element</em> (<code>&lt;tbody&gt;</code>) defines a set of rows defining the body of the table. Though not mandatory, as the rows of the body can be defined as <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/tr\">&lt;tr&gt;</a></code>\n elements children of the parent <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/table\">&lt;table&gt;</a></code>\n element, if present, all <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/tr\">&lt;tr&gt;</a></code>\n elements part of the body must be included into a unique <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/tbody\">&lt;tbody&gt;</a></code>\n element.",
    "attrs": {
      "align": "This enumerated attribute specifies how horizontal alignment of each cell content will be handled.",
      "bgcolor": "This attribute defines the background color of each cell of the column.",
      "char": "This attribute is used to set the character to align the cells in a column on.",
      "charoff": "This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute.",
      "valign": "This attribute specifies the vertical alignment of the text within each row of cells of the table header."
    }
  },
  "td": {
    "desc": "The <em>HTML Table Cell Element</em> (<code>&lt;td&gt;</code>) defines a cell that content data.",
    "attrs": {
      "abbr": "This attribute contains a short abbreviated description of the content of the cell.",
      "align": "This enumerated attribute specifies how horizontal alignment of each cell content will be handled.",
      "axis": "This attribute contains a list of space-separated strings.",
      "bgcolor": "This attribute defines the background color of each cell of the column.",
      "char": "This attribute is used to set the character to align the cells in a column on.",
      "charoff": "This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute.",
      "colspan": "This attribute contains a non-negative integer value that indicates for how many columns the cell extends.",
      "headers": "This attributes a list of space-separated strings, each corresponding to the id attribute of the <th>\n elements that applies to this element.",
      "rowspan": "This attribute contains a non-negative integer value that indicates for how many rows the cell extends.",
      "scope": "",
      "valign": "This attribute specifies the vertical alignment of the text within each row of cells of the table header."
    }
  },
  "textarea": {
    "desc": "The <em>textarea</em> (<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/textarea\">&lt;textarea&gt;</a></code>\n) HTML element represents a multi-line plain-text editing control.",
    "attrs": {
      "autofocus": "This Boolean attribute lets you specify that a form control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control.",
      "cols": "The visible width of the text control, in average character widths.",
      "disabled": "This Boolean attribute indicates that the user cannot interact with the control.",
      "form": "The form element that the textarea element is associated with (its \"form owner\").",
      "maxlength": "The maximum number of characters (Unicode code points) that the user can enter.",
      "name": "The name of the control.",
      "placeholder": "A hint to the user of what can be entered in the control.",
      "readonly": "This Boolean attribute indicates that the user cannot modify the value of the control.",
      "required": "This attribute specifies that the user must fill in a value before submitting a form.",
      "rows": "The number of visible text lines for the control.",
      "selectionDirection": "The direction in which selection occurred.",
      "selectionEnd": "The index to the last character in the current selection.",
      "selectionStart": "The index to the first character in the current selection.",
      "wrap": "Indicates how the control wraps text."
    }
  },
  "tfoot": {
    "desc": "The <em>HTML Table Foot Element</em> (<code>&lt;tfoot&gt;</code>) defines a set of rows summarizing the columns of the table.",
    "attrs": {
      "align": "This enumerated attribute specifies how horizontal alignment of each cell content will be handled.",
      "bgcolor": "This attribute defines the background color of each cell of the column.",
      "char": "This attribute is used to set the character to align the cells in a column on.",
      "charoff": "This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute.",
      "valign": "This attribute specifies the vertical alignment of the text within each row of cells of the table header."
    }
  },
  "th": {
    "desc": "The <em>HTML Table Header Cell Element</em> (<code>&lt;th&gt;</code>) defines a cell that is a header for a group of cells of a table. The group of cells that the header refers to is defined by the \n\n<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/th#attr-scope\">scope</a></code>\n and \n\n<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/th#attr-headers\">headers</a></code>\n attribute.",
    "attrs": {
      "abbr": "This attribute contains a short abbreviated description of the content of the cell.",
      "align": "This enumerated attribute specifies how horizontal alignment of each cell content will be handled.",
      "axis": "This attribute contains a list of space-separated strings.",
      "bgcolor": "This attribute defines the background color of each cell of the column.",
      "char": "This attribute is used to set the character to align the cells in a column on.",
      "charoff": "This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute.",
      "colspan": "This attribute contains a non-negative integer value that indicates on how many columns does the cell extend.",
      "headers": "This attributes a list of space-separated strings, each corresponding to the id attribute of the <th>\n elements that applies to this element.",
      "rowspan": "This attribute contains a non-negative integer value that indicates on how many rows does the cell extend.",
      "scope": "This enumerated attribute defines the cells that the header defined in this <th>\n element relates to.",
      "valign": "This attribute specifies the vertical alignment of the text within each row of cells of the table header."
    }
  },
  "thead": {
    "desc": "The <em>HTML Table Head Element</em> (<code>&lt;thead&gt;</code>) defines a set of rows defining the head of the columns of the table.",
    "attrs": {
      "align": "This enumerated attribute specifies how horizontal alignment of each cell content will be handled.",
      "bgcolor": "This attribute defines the background color of each cell of the column.",
      "char": "This attribute is used to set the character to align the cells in a column on.",
      "charoff": "This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute.",
      "valign": "This attribute specifies the vertical alignment of the text within each row of cells of the table header."
    }
  },
  "time": {
    "desc": "The HTML <em>time</em> element (<code>&lt;time&gt;</code>) represents either time on a 24-hour clock or a precise date in the <a class=\"external\" title=\"http://en.wikipedia.org/wiki/Gregorian_calendar\" rel=\"external\" href=\"http://en.wikipedia.org/wiki/Gregorian_calendar\" target=\"_blank\">Gregorian calendar</a> (with optional time and timezone information).",
    "attrs": {
      "datetime": "This attribute indicates the time and date of the element and must be a valid date with an optional time string.",
      "pubdate": "(This feature is still being discussed by the WHATWG and the W3C HTML5 Working Group.) This Boolean attribute specifies that the date and time given by the element is the publication date of a document."
    }
  },
  "title": {
    "desc": "The <em>HTML Title Element</em> (<code>&lt;title&gt;</code>) defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text and any contained tags are not interpreted.",
    "attrs": {}
  },
  "tr": {
    "desc": "The <em>HTML Table Row Element</em> (<code>&lt;tr&gt;</code>) defines a row of cells in a table. Those can be a mix of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/td\">&lt;td&gt;</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/th\">&lt;th&gt;</a></code>\n elements.",
    "attrs": {
      "align": "This enumerated attribute specifies how horizontal alignment of each cell content will be handled.",
      "bgcolor": "This attribute defines the background color of each cell of the row.",
      "char": "This attribute is used to set the character to align the cells in a column on.",
      "charoff": "This attribute is used to indicate the number of characters to offset the column data from the alignment characters specified by the char attribute.",
      "valign": "This attribute specifies the vertical alignment of the text within each row of cells of the table header."
    }
  },
  "u": {
    "desc": "The <em>HTML Underline Element</em> (<span style=\"font-family: Courier New;\">&lt;u&gt;</span>) renders text with an underline, a line under the baseline of its content.",
    "attrs": {}
  },
  "ul": {
    "desc": "The HTML <em>unordered list</em> element (<code>&lt;ul&gt;</code>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-type\">list-style-type</a></code>\n property.",
    "attrs": {
      "compact": "This Boolean attribute hints that the list should be rendered in a compact style.",
      "type": "Used to set the bullet style for the list."
    }
  },
  "var": {
    "desc": "The HTML Variable Element (<code>&lt;var&gt;</code>) represents a variable in a mathematical expression or a programming context.",
    "attrs": {}
  },
  "video": {
    "desc": "The HTML&nbsp; <code>&lt;video&gt;</code> element is used to embed video content in an HTML&nbsp;or XHTML document.",
    "attrs": {
      "autoplay": "A Boolean attribute; if specified, the video will automatically begin to play back as soon as it can do so without stopping to finish loading the data.",
      "autobuffer": "A Boolean attribute; if specified, the video will automatically begin buffering even if it's not set to automatically play.",
      "buffered": "An attribute you can read to determine which time ranges of the media have been buffered.",
      "controls": "If this attribute is present, Gecko will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback.",
      "height": "The height of the video's display area, in CSS pixels.",
      "loop": "A Boolean attribute; if specified, we will, upon reaching the end of the video, automatically seek back to the start.",
      "muted": "A Boolean attribute which indicates the default setting of the audio contained in the video.",
      "preload": "This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience.",
      "poster": "A URL indicating a poster frame to show until the user plays or seeks.",
      "src": "The URL of the video to embed.",
      "width": "The width of the video's display area, in CSS pixels."
    }
  },
  "wbr": {
    "desc": "The <em>Word Break Opportunit</em><em>y</em> (<code>&lt;wbr&gt;</code>) HTML element represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.",
    "attrs": {}
  }
};

Hacktionary.cssProperties = {
  "animation": "The <code>animation</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property for <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-name\">animation-name</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-duration\">animation-duration</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-timing-function\">animation-timing-function</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-delay\">animation-delay</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-iteration-count\">animation-iteration-count</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/animation-direction\">animation-direction</a></code>\n.",
  "animation-delay": "The <code>animation-delay</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element.",
  "animation-direction": "The <code>animation-direction</code> CSS property indicates whether the animation should play in reverse on alternate cycles.",
  "animation-duration": "The <code>animation-duration</code> CSS property specifies the length of time that an animation should take to complete one cycle.",
  "animation-iteration-count": "The <code>animation-iteration-count</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property defines the number of times an animation cycle should be played before stopping.",
  "animation-name": "The <code>animation-name</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies a list of animations that should be applied to the selected element. Each name indicates a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/@keyframes\">@keyframes</a></code>\n at-rule that defines the property values for the animation sequence.",
  "animation-play-state": "The <code>animation-play-state</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines whether an animation is running or paused. You can query this property's value to determine whether or not the animation is currently running; in addition, you can set its value to pause and resume playback of an animation.",
  "animation-timing-function": "The <code>animation-timing-function</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies how a CSS animation should progress over the duration of each cycle. The possible values are one or several <span class=\"lang lang-en\"><code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/timing-function\">&lt;timing-function&gt;</a></code>\n </span>.",
  "azimuth": "In combination with<code> elevation</code>, <code>azimuth</code> enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.",
  "backface-visibility": "The <code>backface-visibility</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.",
  "background": "The<code> background </code>CSS property is a shorthand for setting the individual background values in a single place in the style sheet.<code> background </code>can be used to set the values for one or more of: <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-color\">background-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-image\">background-image</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-position\">background-position</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-repeat\">background-repeat</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-size\">background-size</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-attachment\">background-attachment</a></code>\n.",
  "background-attachment": "If a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-image\">background-image</a></code>\n is specified, the <code>background-attachment</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines whether that image's position is fixed within the viewport, or scrolls along with its containing block.",
  "background-clip": "The<code> background-clip </code>CSS property specifies whether an element's background, either the color or image, extends underneath its border.",
  "background-color": "The <code>background-color</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the background color of an element, either through a color value or the keyword <code>transparent</code>.",
  "background-image": "The<code> background-image </code>CSS property sets the background images for an element. The images are drawn on successive stacking context layers, with the first specified being drawn as if it is the closest to the user. The <a title=\"border\" rel=\"internal\" href=\"https://developer.mozilla.org/cn/CSS/border\">borders</a> of the element are then drawn on top of them, and the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-color\">background-color</a></code>\n is drawn beneath them.",
  "background-origin": "The<code> background-origin </code>CSS property determines the background positioning area, that is the position of the origin of an image specified using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-image\">background-image</a></code>\n CSS property.",
  "background-position": "The<code> background-position </code>CSS property sets the initial position, relative to the background position layer defined by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/background-origin\">background-origin</a></code>\n for each defined background image.",
  "background-repeat": "The <code>background-repeat</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property defines how background images are repeated. A background image can be repeated along the horizontal axis, the vertical axis, both, or not repeated at all. When the repetition of the image tiles doesn't let them exactly cover the background, the way adjustments are done can be controlled by the author: by default, the last image is clipped, but the different tiles can instead be re-sized, or space can be inserted between the tiles.",
  "background-size": "The<code> background-size </code>CSS property specifies the size of the background images.",
  "bleed": "This property specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled.",
  "border": "The <code>border</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property for setting the individual border property values in a single place in the style sheet. <code>border</code> can be used to set the values for one or more of: <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-width\">border-width</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-style\">border-style</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n.",
  "border-bottom": "The <code>border-bottom</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand that sets the values of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom-color\">border-bottom-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom-style\">border-bottom-style</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom-width\">border-bottom-width</a></code>\n. These properties describe the bottom border of elements.",
  "border-bottom-color": "The<code> border-bottom-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom\">border-bottom</a></code>\n are more convenient and preferable.",
  "border-bottom-left-radius": "The <code>border-bottom-left-radius</code> CSS property sets the rounding of the bottom-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square.",
  "border-bottom-right-radius": "The <code>border-bottom-right-radius</code> CSS property sets the rounding of the bottom-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square.",
  "border-bottom-style": "The <code>border-bottom-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the line style of the bottom border of a box.",
  "border-bottom-width": "The <code>border-bottom-width</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the width of the bottom border of a box.",
  "border-collapse": "The<code> border-collapse </code>CSS property selects a table's border model. This has a big influence on the look and style of the table cells.",
  "border-color": "The<code> border-color </code>CSS property is a shorthand for setting the color of the four sides of an element's border: <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top-color\">border-top-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right-color\">border-right-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-bottom-color\">border-bottom-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left-color\">border-left-color</a></code>\n",
  "border-image": "The<code> border-image </code>CSS property allows drawing an image on the borders of elements. This makes drawing complex looking widgets much simpler than it has been and removes the need for nine boxes in some cases.",
  "border-image-outset": "The <code>border-image-outset </code>property describes, by which amount <dfn id=\"border-image-area\">border image area</dfn> extends beyond the border box.",
  "border-image-repeat": "The <code>border-image-repeat</code> CSS property defines how the middle part of a border image is handled to match the size of the border. It has a one-value syntax which describes the behavior for all sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior.",
  "border-image-source": "The <code>border-image-source</code> CSS property defines the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/image\">&lt;image&gt;</a></code>\n to use instead of the style of the border. If this property is set to <code>none</code>, the style defined by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-style\">border-style</a></code>\n is used instead.",
  "border-image-width": "The <code>border-image-width</code> CSS property defines the offset to use for dividing the border image in nine parts, the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge, bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom and right edges.",
  "border-left": "The <code>border-left</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand that sets the values of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left-color\">border-left-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left-style\">border-left-style</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left-width\">border-left-width</a></code>\n. These properties describe the left border of elements.",
  "border-left-color": "The<code> border-left-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-left\">border-left</a></code>\n are more convenient and preferable.",
  "border-left-style": "The <code>border-left-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the line style of the left border of a box.",
  "border-left-width": "The <code>border-left-width</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the width of the left border of a box.",
  "border-radius": "The <code>border-radius</code> CSS property allows Web authors to define how rounded border corners are. The curve of each corner is defined using one or two radii, defining its shape: circle or ellipse.",
  "border-right": "The <code>border-right</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand that sets the values of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right-color\">border-right-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right-style\">border-right-style</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right-width\">border-right-width</a></code>\n. These properties describe the right border of elements.",
  "border-right-color": "The<code> border-right-color </code>CSS property sets the color of the bottom border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-right\">border-right</a></code>\n are more convenient and preferable.",
  "border-right-style": "The <code>border-right-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the line style of the right border of a box.",
  "border-right-width": "The <code>border-right-width</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the width of the right border of a box.",
  "border-spacing": "The <code>border-spacing</code> CSS property specifies the distance between the borders of adjacent cells (only for the <a title=\"en/CSS/border-collapse\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/border-collapse\">separated borders model</a>). This is equivalent to the <code>cellspacing</code> attribute in presentational HTML, but an optional second value can be used to set different horizontal and vertical spacing.",
  "border-style": "The <code>border-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property for setting the line style for all four sides of the elements border.",
  "border-top": "The <code>border-top</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand that sets the values of <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top-color\">border-top-color</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top-style\">border-top-style</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top-width\">border-top-width</a></code>\n. These properties describe the top border of elements.",
  "border-top-color": "The<code> border-top-color </code>CSS property sets the color of the top border of an element. Note that in many cases the shorthand CSS properties&nbsp; <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-color\">border-color</a></code>\n or <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-top\">border-top</a></code>\n are more convenient and preferable.",
  "border-top-left-radius": "The <code>border-top-left-radius</code> CSS property sets the rounding of the top-left corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square.",
  "border-top-right-radius": "The <code>border-top-right-radius</code> CSS property sets the rounding of the top-right corner of the element. The rounding can be a circle or an ellipse, or if one of the value is <code>0</code> no rounding is done and the corner is square.",
  "border-top-style": "The <code>border-top-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the line style of the top border of a box.",
  "border-top-width": "The <code>border-top-width</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property sets the width of the top border of a box.",
  "border-width": "The<code> border-width </code>CSS property sets the width of the border of a box. Using the shorthand property <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border\">border</a></code>\n is often more convenient.",
  "bottom": "The <code>bottom</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property participates in specifying the position of <em>positioned elements</em>.",
  "box-shadow": "The <code>box-shadow</code> CSS property accepts one or more shadow effects as a comma-separated list. It allows casting a drop shadow from the frame of almost any element. If a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/border-radius\">border-radius</a></code>\n is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple <a title=\"text-shadow\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/text-shadow\">text shadows</a> (the first specified shadow is on top).",
  "box-sizing": "The<code> box-sizing </code>CSS property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.",
  "caption-side": "The <code>caption-side</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property positions the content of a table's <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/caption\">&lt;caption&gt;</a></code>\n on the specified side.",
  "clear": "The <code>clear</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies whether an element can be next to <a title=\"en/CSS/float\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/float\">floating</a> elements that precede it or must be moved down (cleared) below them.",
  "clip": "The <code>clip</code> CSS property defines what portion of an element is visible. The <code>clip</code> property applies only to elements with <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/position\">position:absolute</a></code>\n.",
  "color": "The <code>color</code> CSS property sets the foreground color of an element's text content",
  "column-count": "The <code>column-count </code>CSS property describes the number of columns of the element.",
  "column-fill": "The <code>column-fill</code> CSS property controls how contents are partitioned into columns. Contents are either balanced, which means that contents in all columns will have the same height or, when using <code>auto</code>, just take up the room the content needs.",
  "column-gap": "The <code>column-gap</code> CSS property sets the size of the gap between columns for elements which are specified to display as a multi-column element.",
  "column-rule": "In multi-column layouts, the <code>column-rule</code> CSS property specifies a straight line, or \"rule\", to be drawn between each column. It is a convenient shorthand to avoid setting each of the individual <code>column-rule-*</code> properties separately : <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-rule-width\">column-rule-width</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-rule-style\">column-rule-style</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-rule-color\">column-rule-color</a></code>\n.",
  "column-rule-color": "The<code> column-rule-color </code>CSS property lets you set the color of the rule drawn between columns in multi-column layouts.",
  "column-rule-style": "The<code> column-rule-style </code>CSS property lets you set the style of the rule drawn between columns in multi-column layouts.",
  "column-rule-width": "The<code> column-rule-width </code>CSS property lets you set the width of the rule drawn between columns in multi-column layouts.",
  "column-span": "The <code>column-span</code> CSS property makes it possible for an element to span across all columns when its value is set to <code>all</code>. An element that spans more than one column is called a <strong>spanning element</strong>.",
  "column-width": "The <code>column-width</code> CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the column around that suggested value, allowing to achieve scalable designs that fit different screen size. Especially in presence of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-count\">column-count</a></code>\n CSS property which has precedence, to set an exact column width, all length values must be specified. In horizontal text these are <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/width\">width</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-width\">column-width</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-gap\">column-gap</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-rule-width\">column-rule-width</a></code>\n.",
  "columns": "The <code>columns</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property allowing to set both the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-width\">column-width</a></code>\n and the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/column-count\">column-count</a></code>\n properties at the same time.",
  "content": "The<code> content </code>CSS property is used with the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/%3Abefore\">:before</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/%3Aafter\">:after</a></code>\n pseudo-elements to generate content in an element.",
  "counter-increment": "The <code>counter-increment</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is used to increase the value of <a title=\"en/CSS_Counters\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS_Counters\">CSS Counters</a> by a given value. The counter's value can be reset using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/counter-reset\">counter-reset</a></code>\n CSS property.",
  "counter-reset": "The <code>counter-reset</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is used to reset <a title=\"en/CSS_Counters\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS_Counters\">CSS Counters</a> to a given value.",
  "cursor": "The<code> cursor </code>CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.",
  "direction": "The <code>direction</code> CSS property should be set to match the direction of the text: <code>rtl</code> for Hebrew or Arabic text and <code>ltr</code> for other scripts. This should normally be done as part of the document (e.g., using the <code>dir</code> attribute in HTML) rather than through direct use of CSS.",
  "display": "The <code>display</code> CSS property specifies the type of rendering box used for an element. In HTML, default <code>display</code> property values are taken from behaviors described in the HTML specifications or from the browser/user default stylesheet. The default value in XML is <code>inline</code>.",
  "empty-cells": "The <code>empty-cells </code>CSS property specifies how user agent should render borders and backgrounds around cells that have no visible content.",
  "float": "The <code>float</code> CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.",
  "font": "The <code>font</code> CSS property is either a shorthand property for setting <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-style\">font-style</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-variant\">font-variant</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-weight\">font-weight</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-size\">font-size</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/line-height\">line-height</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-family\">font-family</a></code>\n, or a way to set the element's font to a system font, using specific keywords.",
  "font-family": "The<code> font-family </code>CSS property allows for a prioritized list of font family names and/or generic family names to be specified for the selected element. Unlike most other CSS properties, values are separated by a comma to indicate that they are alternatives. The browser will select the first font on the list that is installed on the computer, or that can be downloaded using the information provided by a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/@font-face\">@font-face</a></code>\n at-rule.",
  "font-size": "The <code>font-size</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the size of the font. The font size may, in turn, change the size of other items, since it is used to compute the value of <code>em</code> and <code>ex</code> length units.",
  "font-size-adjust": "The<code> font-size-adjust </code>CSS property specifies that font size should be chosen based on the height of lowercase letters rather than the height of capital letters.",
  "font-stretch": "The<code> font-stretch </code>CSS property selects a normal, condensed, or extended face from a font family.",
  "font-style": "The<code> font-style </code>CSS property allows<code> italic </code>or<code> oblique </code>faces to be selected within a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-family\">font-family</a></code>\n.<br> ",
  "font-variant": "The<code> font-variant </code>CSS property selects a<code> normal</code>, or<code> small-caps </code>face from a font family. Setting<code> font-variant </code>is also possible by using the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font\">font</a></code>\n shorthand.",
  "font-weight": "The <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/font-weight\">font-weight</a></code>\n <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the weight or boldness of the font. However, some fonts are not available in all weights; some are available only on <code>normal</code> and <code>bold</code>.",
  "height": "The<code> height </code>CSS property specifies the height of the content area of an element. The <a title=\"en/CSS/Box_model#content\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#content\">content area</a> is <em>inside</em> the padding, border, and margin of the element.",
  "hyphens": "The <code>hyphens</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property tells the browser how to go about splitting words to improve the layout of text when line-wrapping.",
  "image-rendering": "The <code>image-rendering</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property provides a hint to the user agent about how to handle its image rendering.<br> <code>image-rendering </code>applies to scaled images (and other elements, see below). For example, if the natural size of the image is<em> 100×100px </em>but the page author specifies the dimensions to <code>200×200px</code> (or<code>50×50px</code>), then the image will be upscaled (or downscaled) to the new dimensions using the specified algorithm. Scaling may also apply due to user interaction (zooming).",
  "left": "The <code>left</code> CSS property specifies part of the position of positioned elements.",
  "letter-spacing": "The<code> letter-spacing </code>CSS property specifies spacing behavior between text characters.",
  "line-height": "On inline elements, the<code> line-height </code>CSS property specifies the height that is used in the calculation of the line box height.<br>\nOn block level elements,<code> line-height </code>specifies the minimal height of line boxes within the element.",
  "list-style": "The<code> list-style </code>CSS property is a shorthand property for setting <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-type\">list-style-type</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-image\">list-style-image</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style-position\">list-style-position</a></code>\n.",
  "list-style-image": "The<code> list-style-image </code>CSS property sets the image that will be used as the list item marker. It is often more convenient to use the shortcut <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style\">list-style</a></code>\n.",
  "list-style-position": "The<code> list-style-position </code>CSS property specifies the position of the marker box in the principal block box. It is often more convenient to use the shortcut <span class=\"lang lang-en\"><code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/list-style\">list-style</a></code>\n</span>.",
  "list-style-type": "The<code> list-style-type </code>CSS property specifies appearance of a list item element. As it is the only one who defaults to <code>display:list-item</code>, this is usually a <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/HTML/Element/li\">&lt;li&gt;</a></code>\n element, but can be any element with this <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/display\">display</a></code>\n value.",
  "margin": "The<code> margin </code>CSS property sets the margin for all four sides. It is a shorthand to avoid setting each side separately with the other margin properties:<br>\n<code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/margin-top\">margin-top</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/margin-right\">margin-right</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/margin-bottom\">margin-bottom</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/margin-left\">margin-left</a></code>\n.<br>\nNegative value are also allowed.",
  "margin-bottom": "The <code>margin-bottom</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the margin space required on the bottom of an element. A negative value is also allowed.",
  "margin-left": "The <code>margin-left</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the margin space required on the left side of an element. A negative value is also allowed.",
  "margin-right": "The <code>margin-right</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the margin space required on the right side of an element. A negative value is also allowed.",
  "margin-top": "The<code> margin-top </code>CSS property of an element sets the margin space required on the top of an element. A negative value is also allowed.",
  "marker-offset": "&nbsp;",
  "marks": "The <code>marks</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property adds crop and/or cross marks to the presentation of the document. <em>Crop marks</em> indicate where the page should be cut. <em>Cross marks</em> are used to align sheets.",
  "max-height": "The<code> max-height </code>CSS property is used to set the maximum height of a given element. It prevents the used value of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/height\">height</a></code>\n property from becoming larger than the value specified for<code> max-height</code>.",
  "max-width": "The<code> max-width </code>CSS property is used to set the maximum width of a given element. It prevents the used value of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/width\">width</a></code>\n property from becoming larger than the value specified for<code> max-width</code>.",
  "min-height": "The<code> min-height </code>CSS property is used to set the minimum height of a given element. It prevents the used value of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/height\">height</a></code>\n property from becoming smaller than the value specified for<code> min-height</code>.",
  "min-width": "The<code> min-width </code>CSS property is used to set the minimum width of a given element. It prevents the used value of the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/width\">width</a></code>\n property from becoming smaller than the value specified for<code> min-width</code>.",
  "opacity": "The <code>opacity</code> CSS property specifies the transparency of an element, that is, the degree to which the background behind the element is overlaid.",
  "orphans": "The <code>orphans</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property refers to the <em>minimum</em> number of lines in a block container that must be left at the bottom of the page.&nbsp; This property is normally used to control how page breaks occur.",
  "outline": "The<code> outline </code>CSS property is a shorthand property for setting one or more of the individual outline properties <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/outline-style\">outline-style</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/outline-width\">outline-width</a></code>\n and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/outline-color\">outline-color</a></code>\n in a single rule. In most cases the use of this shortcut is preferable and more convenient.",
  "outline-color": "The<code> outline-color </code>CSS property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.",
  "outline-offset": "The<code> outline-offset </code>CSS property is used to set space between an <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/outline\">outline</a></code>\n and the edge or border of an element. An outline is a line that is drawn around elements, outside the border edge.",
  "outline-style": "The<code> outline-style </code>CSS property is used to set the style of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.",
  "outline-width": "The<code> outline-width </code>CSS property is used to set the width of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out:",
  "overflow": "The<code> overflow </code>CSS property specifies whether to clip content, render scroll bars or display overflow content of a block-level element.",
  "overflow-x": "The <code>overflow-x </code><a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies whether to clip content, render a scroll bar or display overflow content of a block-level element, when it overflows at the left and right edges.",
  "padding": "The<code> padding </code>CSS property sets the required padding space on all sides of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/Box_model#padding\">padding area</a> is the space between the content of the element and its border. Negative values are not allowed.",
  "padding-bottom": "The <code>padding-bottom</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the padding space required on the bottom of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#padding\">padding area</a> is the space between the content of the element and it's border. A negative value is not allowed.",
  "padding-left": "The <code>padding-left</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the padding space required on the left side of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#padding\">padding area</a> is the space between the content of the element and it's border. A negative value is not allowed.",
  "padding-right": "The <code>padding-right</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the padding space required on the right side of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#padding\">padding area</a> is the space between the content of the element and its border. Negative values are not allowed.",
  "padding-top": "The <code>padding-top</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property of an element sets the padding space required on the top of an element. The <a title=\"http://developer.mozilla.org/en/CSS/Box_model#padding\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#padding\">padding area</a> is the space between the content of the element and it's border. A negative values is not allowed.",
  "page-break-after": "The <code>page-break-after</code> CSS property adjusts page breaks <em>after</em> the current element.",
  "page-break-before": "The <code>page-break-before</code> CSS property adjusts page breaks <em>before</em> the current element.",
  "page-break-inside": "The <code>page-break-inside</code> CSS property adjusts page breaks <em>inside</em> the current element.",
  "perspective": "The <code>perspective</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective. Each 3D element that is placed between the z=0 and the user is enlarged, each 3D-element with z&lt;0 is shrinked. How much deformation is defined by the value of this property.",
  "perspective-origin": "The <code>perspective-origin</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines the position the viewer is looking at. It is used as the <em>vanishing point</em> by the <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/perspective\">perspective</a></code>\n property.",
  "position": "The<code> position </code>CSS property chooses alternative rules for positioning elements, designed to be useful for scripted animation effects.",
  "quotes": "The <code>quotes</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property indicates how user agents should render quotation marks.",
  "resize": "The <code>resize</code> CSS property lets you control the resizability of an element.",
  "right": "The <code>right</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies part of the position of positioned elements.",
  "tab-size": "The <code>tab-size</code> CSS property is used to customize the width of a tab (<code>U+0009</code>) character.",
  "table-layout": "The <code>table-layout</code> CSS property defines the algorithm to be used to layout the table cells, rows, and columns.",
  "text-align": "The<code> text-align </code>CSS property describes how inline content like text is aligned in its parent block element.<code> text-align </code>does not control the alignment of block elements itself, only their inline content.",
  "text-align-last": "The <code>text-align-last</code> CSS property describes how the last line of a block or a line right before a forced line break is aligned.",
  "text-decoration": "The<code> text-decoration </code>CSS property is used to set the text formattings <code>underline, overline, line-through</code> and <code>blink</code>.",
  "text-decoration-color": "The <code>text-decoration-color</code> CSS property sets the color used when drawing underlines, overlines, or strike-throughs specified by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/text-decoration-line\">text-decoration-line</a></code>\n. This is the preferred way to color these text decorations, rather than using combinations of other HTML&nbsp;elements.",
  "text-decoration-line": "The <code>text-decoration-line</code> CSS property sets what kind of line decorations are added to an element.",
  "text-decoration-style": "The <code>text-decoration-style</code> CSS property defines the style of the lines specified by <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/text-decoration-line\">text-decoration-line</a></code>\n. The style applies to all lines, there is no way to define different style for each of the line defined by <code>text-decoration-line</code>.",
  "text-indent": "The<code> text-indent </code>CSS property specifies how much horizontal space should be left before beginning of the first line of the text content of an element. Horizontal spacing is with respect to the left (or right, for right-to-left layout) edge of the containing block element's box.",
  "text-shadow": "The<code> text-shadow </code>CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/text-decoration\">text-decorations</a></code>\n of the element.",
  "text-transform": "The <code>text-transform</code> CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.",
  "top": "The <code>top</code> CSS property specifies part of the position of positioned elements. It has no effect on non-positioned elements.",
  "transform": "The <code>transform</code> CSS property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set.",
  "transform-origin": "The <code>transform-origin</code> CSS property lets you modify the origin for transformations of an element. For example, the transform-origin of the <code>rotate()</code> function is the centre of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)",
  "transform-style": "The <code>transform-style</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.",
  "transition": "The<code> transition </code><a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is a shorthand property for <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/transition-property\">transition-property</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/transition-duration\">transition-duration</a></code>\n, <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/transition-timing-function\">transition-timing-function</a></code>\n, and <code><a rel=\"custom\" href=\"https://developer.mozilla.org/en/CSS/transition-delay\">transition-delay</a></code>\n.",
  "transition-delay": "The<code> transition-delay </code><a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the amount of time to wait between a change being requested to a property that is to be transitioned and the start of the <a title=\"en/CSS/CSS transitions\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/CSS_transitions\">transition effect</a>.",
  "transition-duration": "The<code> transition-duration </code><a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the number of seconds or milliseconds a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.",
  "transition-property": "The <code>transition-property</code> CSS property is used to specify the names of CSS properties to which a <a title=\"en/CSS/CSS transitions\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/CSS_transitions\">transition effect</a> should be applied.",
  "transition-timing-function": "The<code> transition-timing-function </code>CSS property is used to describe how the intermediate values of the CSS&nbsp;properties being affected by a <a title=\"en/CSS/CSS transitions\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/CSS_transitions\">transition effect</a> are calculated. This in essence lets you establish an acceleration curve, so that the speed of the transition can vary over its duration.",
  "vertical-align": "The <code>vertical-align</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property specifies the vertical alignment of an inline or table-cell element.",
  "visibility": "The<code> visibility </code>CSS property is used for two things:",
  "white-space": "The<code> white-space </code>CSS property is used to to describe how whitespace inside the element is handled.",
  "widows": "where:",
  "width": "The<code> width </code>CSS property specifies the width of the content area of an element. The <a title=\"en/CSS/box_model#content\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS/box_model#content\">content area</a> is <em>inside</em> the padding, border, and margin of the element.",
  "word-spacing": "The<code> word-spacing </code>CSS property specifies spacing behavior between tags and words.",
  "word-wrap": "The <code>word-wrap</code> <a title=\"CSS\" rel=\"internal\" href=\"https://developer.mozilla.org/en/CSS\">CSS</a> property is used to to specify whether or not the browser is allowed to break lines within words in order to prevent overflow when an otherwise unbreakable string is too long to fit.",
  "z-index": "The<code> z-index </code>CSS property specifies the z-order of an element and its descendants. When elements overlap, z-order determines which one covers the other. An element with a larger z-index generally covers an element with a lower one."
};
