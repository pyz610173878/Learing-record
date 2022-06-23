# Node接口

## 1.  属性

​        Node.prototype.nodeType
        Node.prototype.nodeName
        Node.prototype.nodeValue
        Node.prototype.textContent
        Node.prototype.baseURI
        Node.prototype.ownerDocument
        Node.prototype.nextSibling
        Node.prototype.previousSibling
        Node.prototype.parentNode
        Node.prototype.parentElement
        Node.prototype.firstChild，Node.prototype.lastChild
        Node.prototype.childNodes
        Node.prototype.isConnected

## 2.  方法

​        Node.prototype.appendChild()
        Node.prototype.hasChildNodes()

## 2.3  Node.prototype.cloneNode()

```

```







​        Node.prototype.insertBefore()

### 2.5  Node.prototype.removeChild() 删除

删除指定元素中的子节点.

实例

```javascript
<ul>
        <li>熊大</li>
        <li>熊二</li>
        <li>光头强</li>
    </ul>
var ul = document.querySelector('ul');
 ul.removeChild(ul.firstChild);
第二种方法:
ul.removeChild(children[0])
```



​        Node.prototype.replaceChild()
        Node.prototype.contains()
        Node.prototype.compareDocumentPosition()
        Node.prototype.isEqualNode()，Node.prototype.isSameNode()
        Node.prototype.normalize()
        Node.prototype.getRootNode()