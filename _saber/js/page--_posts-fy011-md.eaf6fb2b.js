(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{36:function(e,t,o){"use strict";o.r(t);var i=o(0),n=function(e){var t,o,i,n=(i=void 0,(t={}).type=o="post",t.internal=i,t.contentType="markdown",t.slug="fy011",t.content=i,t.createdAt=new Date(152989955e4),t.updatedAt=new Date(1583811114177),t.title="不要视图，只要控制器，成不？",t.date="2018-06-25 12:05:50",t.layout=o,t.markdownHeadings=[],t.excerpt='<p>本文为<a href="https://swift.gg/">SwiftGG项目组</a>翻译文章，<a href="http://khanlou.com/2018/02/just-controllers/">原文链接在此</a>。\n原作者：Soroush Khanlou\n原标题：Just Controllers\n翻译：<em>PlayerUnkown</em>\n译文版权归译者所有，商业转载请联系<a href="dearbojack.github.io">译者</a>。</p>\n',t.permalink="/posts/fy011.html",t.assets={},t.attributes=t,t),r=e.options.beforeCreate||[];e.options.beforeCreate=[function(){this.$page=n}].concat(r);["layout","transition"].forEach((function(t){var o=e.options.PageComponent;o&&(e.options[t]=o[t]),void 0===e.options[t]&&(e.options[t]=n[t])})),n.slug&&(e.options.name="page-wrapper-"+n.slug.replace(/[^0-9a-z\-]/gi,"-"))},r=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("layout-manager",[o("p",[e._v("本文为"),o("saber-link",{attrs:{to:"https://swift.gg/"}},[e._v("SwiftGG项目组")]),e._v("翻译文章，"),o("saber-link",{attrs:{to:"http://khanlou.com/2018/02/just-controllers/"}},[e._v("原文链接在此")]),e._v("。\n原作者：Soroush Khanlou\n原标题：Just Controllers\n翻译："),o("em",[e._v("PlayerUnkown")]),e._v("\n译文版权归译者所有，商业转载请联系"),o("saber-link",{attrs:{to:"dearbojack.github.io"}},[e._v("译者")]),e._v("。")],1),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("苹果官方文档中提到了 MVC 的软件设计模式。不过，苹果介绍的并不是本质意义上的 MVC 。"),o("saber-link",{attrs:{to:"http://khanlou.com/2014/03/model-view-whatever/"}},[e._v("关于这一点我之前也有写过一篇文章")]),e._v("，MVC 是为 Smalltalk 语言设计的一种设计模式。在 Smalltalk 语言里，MVC 的三个组件：模型（model）、视图（view）和控制器（controller）之间都可以相互通信。这就意味着或者视图知道如何实现一个模型，或者模型知道如何在视图中应用自己。")],1),e._v(" "),o("p",[e._v("我们写 iOS 软件的时候，通常会把可以直接通信的视图和模型称之为“反模式”，不推荐这么做。我们所谓的 MVC 更准确的说其实是“模型-视图-适配器（Model - View - Adapter）”。我们说的“视图控制器”（适配器）其实只是模型和视图中间沟通的一个桥梁。笼统来讲，我觉得这是对正统MVC一个不错的改良——不是把视图和模型绑在一起，而是通过一个适配器把模型和视图联系起来，这个方法不错。然而，我不得不说，在我工作中涉及到的很多系统里，其实模型和视图都是分开的。")]),e._v(" "),o("p",[e._v("以上就是为什么 iOS开发里会有视图控制器的原因：把模型和视图联系起来。但是这种模式的编码会产生一些问题：有一些代码看起来既不属于模型，也不属于视图，所以我们就把这些代码放到了视图控制器里，最后视图控制器变得超级臃肿。关于这个问题，我在博客里面讨论过"),o("saber-link",{attrs:{to:"http://khanlou.com/2015/10/coordinators-redux/"}},[e._v("很多次")]),e._v("，但这次我想说的不是这个问题。")],1),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("我私下里听到过很多关于"),o("code",{pre:!0},[e._v("UIViewController")]),e._v("的谈论。我认为"),o("code",{pre:!0},[e._v("UIViewController")]),e._v("这个基本类写的不是很好，这个你用 UIKit 用得越久就越能感觉到。我听说"),o("code",{pre:!0},[e._v("UIViewController")]),e._v("这个基本类型有1万到2万行代码（那是几年前了，现在可能已经超过两万行了）。")]),e._v(" "),o("p",[e._v("当我们需要把"),o("code",{pre:!0},[e._v("UIView")]),e._v("和一个模型联系起来的时候，我们通常会把视图控制器分成一个个小的 视图控制器组件，然后再组装到一起。")]),e._v(" "),o("p",[e._v("但是，这样做太大动干戈（小题大做）了。一个小地方没处理好，就会出现很多bug，而且这样的bug很难修复，也没有什么提示。然后，当你终于找到bug的时候，bug通常是对"),o("code",{pre:!0},[e._v("didMove")]),e._v("或者"),o("code",{pre:!0},[e._v("willMove")]),e._v("调用的顺序不对，程序忽然就好了。其实，出现了"),o("code",{pre:!0},[e._v("didMove")]),e._v("和"),o("code",{pre:!0},[e._v("willMove")]),e._v("已经说明这些组件一些内部状态需要清理了。")]),e._v(" "),o("p",[e._v("这样的情况我自己就遇到过两次。第一次是我把视图控制器放在了"),o("code",{pre:!0},[e._v("tableView")]),e._v("的"),o("code",{pre:!0},[e._v("cell")]),e._v("里。出现的bug就是，table view里面的一些内容总会莫名其妙地消失。然后过了好几个月，我才意识到我对 table view cells的生命周期理解有误。")]),e._v(" "),o("p",[e._v("在我改正了一些对"),o("code",{pre:!0},[e._v("-addChildViewController")]),e._v("的调用之后，程序就正常运行了。")]),e._v(" "),o("p",[e._v("这件事让我看到了一个很大的问题：视图控制器的视图并不是一个普普通通的视图。它知道自己不是一个普通的视图，而是一个视图控制器的视图，它有自己一些特性。")]),e._v(" "),o("p",[e._v("回过头去看，一切都很明显。"),o("code",{pre:!0},[e._v("UIViewController")]),e._v("怎么知道什么时候该去调用"),o("code",{pre:!0},[e._v("viewDidLayoutSubviews")]),e._v("?肯定是"),o("code",{pre:!0},[e._v("view")]),e._v("向它发送了请求，这就意味着视图对视图控制器是有一些了解的。")]),e._v(" "),o("p",[e._v("第二次是最近碰到的，这次我是在把一个视图控制器的视图作为一个text field 的"),o("code",{pre:!0},[e._v("inputAccessoryView")]),e._v("。我是在实现一个通信软件（类似 iMessage）里"),o("code",{pre:!0},[e._v("textField")]),e._v("贴在屏幕底部的功能，整个过程十分挫败。我花了整整一天时间都没搞定，最后还是把这个视图转换成了一个普通的视图。")]),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("所以，我们通常想让"),o("code",{pre:!0},[e._v("UIViewController1")]),e._v("做的是哪些事情呢？")]),e._v(" "),o("ul",[o("li",[e._v("承载视图")]),e._v(" "),o("li",[e._v("把模型和视图联系起来")])]),e._v(" "),o("p",[e._v("那"),o("code",{pre:!0},[e._v("UIViewController1")]),e._v("还做了那些我们并不十分在意的事呢？")]),e._v(" "),o("ul",[o("li",[e._v("为子视图控制器提供存储")]),e._v(" "),o("li",[e._v("把外观和过渡动画推送给子视图控制器")]),e._v(" "),o("li",[e._v("可以在类似"),o("code",{pre:!0},[e._v("UINavigationController")]),e._v("的容器中显示")]),e._v(" "),o("li",[e._v("内存过低通知")]),e._v(" "),o("li",[e._v("处理状态栏")]),e._v(" "),o("li",[e._v("保存状态、恢复状态")])]),e._v(" "),o("p",[e._v("知道了这些，在一些特殊情况下，我们要做一个替代视图控制器的东西的时候，我们就知道了哪些东西是我们并不需要的。我喜欢这样，因为这样可以快速地解决问题，同时也符合我“自己的事情自己做”的性格。")]),e._v(" "),o("p",[e._v("还有一个问题，这个东西怎么命名呢？我觉得命名成一个视图控制器不太好，很容易被误解为一个"),o("code",{pre:!0},[e._v("UIViewController")]),e._v("的子类。或者，我们就叫它"),o("code",{pre:!0},[e._v("Controller")]),e._v("?我觉得可以（"),o("saber-link",{attrs:{to:"http://khanlou.com/2014/11/a-controller-by-any-other-name/"}},[e._v("尽管我之前可能有其他观点")]),e._v("），因为它的作用就是iOS MVC设计框架中控制器的作用（把视图和模型联系起来），但是还有其他一些备选："),o("code",{pre:!0},[e._v("Binder")]),e._v("（粘合）, "),o("code",{pre:!0},[e._v("Binding")]),e._v("（捆绑）, "),o("code",{pre:!0},[e._v("Pair")]),e._v("（配对）, "),o("code",{pre:!0},[e._v("Mediator")]),e._v("（中介）, "),o("code",{pre:!0},[e._v("Concierge")]),e._v("（前台）。")],1),e._v(" "),o("p",[e._v("这个做法还有一个好处是，"),o("strong",[e._v("特别好写")]),e._v("。")]),e._v(" "),o("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"swift"}},[o("pre",{pre:!0,attrs:{class:"saber-highlight-code language-swift"}},[o("code",{pre:!0,attrs:{class:"language-swift"}},[e._v("class DestinationTextFieldController {\n\n    var destination: Destination?\n\n    weak var delegate: DestinationTextFieldControllerDelegate?\n\n    let textField = UITextField().configure({\n        $0.autocorrectionType = .no\n        $0.clearButtonMode = .always\n    })\n    \n}")])])]),o("p",[e._v("不用"),o("code",{pre:!0},[e._v("UIViewController")]),e._v("的子类，写个这样的东西，可能会有人喊，“异教徒！烧死他！”但是，当"),o("code",{pre:!0},[e._v("UIViewController")]),e._v("没有把自己该做的事情做好的时候，我们就应该抛弃它。")]),e._v(" "),o("p",[e._v("大家已将知道怎么给自己的新对象加新功能了。在我的这个例子中，控制器成了"),o("code",{pre:!0},[e._v("textField")]),e._v("的代理，文字变化时发出事件（以及域元数据 domain metadta），同时提供更新视图（这个例子中是"),o("code",{pre:!0},[e._v("textField")]),e._v("）的接口。")]),e._v(" "),o("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"swift"}},[o("pre",{pre:!0,attrs:{class:"saber-highlight-code language-swift"}},[o("code",{pre:!0,attrs:{class:"language-swift"}},[e._v("extension DestinationTextFieldController {\n\tvar isActive: Bool {\n\t\treturn self.textField.isFirstResponder\n\t}\n\n\tfunc update(with destination: Destination) {\n\t\tself.destination = destination\n\t\tconfigureView()\n\t}\n\t\n\tprivate func configureView() {\n\t\ttextField.text = destination.descriptionForDisplay\n\t}\n}")])])]),o("p",[e._v("使用这种新的控制器你还需要做其他几件事：")]),e._v(" "),o("ul",[o("li",[e._v("你得新建一个实例变量来存储数据")]),e._v(" "),o("li",[e._v("你得负责一些触发事件——因为它不是一个视图控制器，没有"),o("code",{pre:!0},[e._v("-viewDidAppear")])]),e._v(" "),o("li",[e._v("你不是在"),o("code",{pre:!0},[e._v("UIKit")]),e._v("框架里面了，所以其他一些"),o("code",{pre:!0},[e._v("UIKit")]),e._v("的特性（"),o("saber-link",{attrs:{to:"https://developer.apple.com/documentation/uikit/uitraitcollection"}},[e._v("UITraitCollection")]),e._v(", "),o("saber-link",{attrs:{to:"https://developer.apple.com/documentation/uikit/uiview/positioning_content_relative_to_the_safe_area"}},[e._v("safe area insets")]),e._v(", 或者"),o("saber-link",{attrs:{to:"https://developer.apple.com/documentation/uikit/uiresponder"}},[e._v("UIResponder")]),e._v("）你都不能再使用了。如果要使用，你必须自己实现。")],1)]),e._v(" "),o("p",[e._v("使用这个对象不是很难，不过你还是需要写明它的数据存储方式， 防止它的内存被回收。")]),e._v(" "),o("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"swift"}},[o("pre",{pre:!0,attrs:{class:"saber-highlight-code language-swift"}},[o("code",{pre:!0,attrs:{class:"language-swift"}},[e._v("class MyViewController: UIViewController, DestinationTextFieldControllerDelegate {\n\n\n\tlet destinationViewController = DestinationTextFieldController()\n\t\n\toverride func viewDidLoad() {\n\t\tsuper.viewDidLoad()\n\t\tdestinationViewController.delegate = self\n\t\tview.addSubview(destinationViewController.view)\n\t}\n\t\n\t//handle any delegate methods\n\n}")])])]),o("p",[e._v("话说回来，即使你使用我说的这个方法，其他大部分的视图应该还会是视图控制器和"),o("code",{pre:!0},[e._v("UIViewController")]),e._v("的子类。不过，在某些特殊的情况下，整合一个视图控制器会耗费你过多的精力，这时候采用这种方法，就可以避免再次被"),o("code",{pre:!0},[e._v("UIKit")]),e._v("折磨。")])])}),[],!1,null,null,null);"function"==typeof n&&n(r);t.default=r.exports}}]);