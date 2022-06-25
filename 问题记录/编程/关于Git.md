# 上传问题

## 1. 上传失败，无法上传

### 1.1 状态码 443

### 1.2 无法已服务器建立连接





## 2. 上传文件不全面，仅仅一部分上传成功

经过验证，建立空文件夹不会被`git`识别到修改。

已经存在与仓库中的文件进行修改可以被识别。这些问题出现的原因其实都是自己没有认真看教程所导致的。



# git push

Everything up-to-date

即使是使用 commit 上传暂存区。没有在弹出 提交结果中，修改内容。就会出现这种代码

产生的原因是什么呢？



## 1. 连接被重置

![image-20220623185743687](%E5%85%B3%E4%BA%8EGit.assets/image-20220623185743687-16559818667831.png)

```
fatal: 无法访问'https://github.com/pyz610173878/Learing-record.git/'。OpenSSL SSL_read。连接被重置，errno 10054

```

它与443之间的区别是什么呢？



# 参考资料

* https://stackoverflow.com/questions/18356502/github-failed-to-connect-to-github-443-windows-failed-to-connect-to-github

