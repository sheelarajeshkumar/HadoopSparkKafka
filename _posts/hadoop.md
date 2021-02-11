---
index: 1
title: "Hadoop"
excerpt: "A brief write-up about preparing your environment. Includes setting up elasticsearch in your local/remote linux based environment. Also need kibana as it has UI for interacting with elasticsearch"
coverImage: "https://blog.min.io/content/images/2019/08/hadoop-logo.png"
date: "2021-02-01T05:35:07.322Z"
ogImage:
  url: "https://blog.min.io/content/images/2019/08/hadoop-logo.png"
---

## Hadoop Configuration

## Install Java

Follow below step to install java on debian base systems.

```bash
$ sudo apt update
$ sudo apt install default-jre
$ java -version
```

## Install Hadoop

```bash
$ wget http://apache.mirrors.tds.net/hadoop/common/hadoop-2.7.3/hadoop-2.7.3.tar.gz
$ tar -xzvf hadoop-2.7.3.tar.gz
$ ls /usr/local/
$ sudo mv hadoop-2.7.3/ /usr/local/
$ cd /usr/local/hadoop-2.7.3
$ sudo mkdir -p $HOME/dfs/nn
$ sudo chmod -R 777 $HOME/dfs/nn
```

## Hadoop configurations

```bash
$ vi /usr/local/hadoop-2.7.3/etc/hadoop/hadoop-env.sh
```

## Paste the below lines

```
export JAVA_HOME=/usr/java/jdk1.8.0_161/
export HADOOP_PREFIX=/usr/local/hadoop-2.7.3/
```

Create file `/usr/local/hadoop-2.7.3/etc/hadoop/core-site.xml` and pase below code

```bash
<configuration>
  <property>
    <name>fs.defaultFS</name>
    <value>hdfs://localhost:9000</value>
  </property>
</configuration>
```

Create file `/usr/local/hadoop-2.7.3/etc/hadoop/hdfs-site.xml` and pase below code

```bash
<configuration>
  <property>
    <name>dfs.replication</name>
    <value>1</value>
  </property>
  <property>
    <name>dfs.namenode.name.dir</name>
    <value>/home/<user>/dfs/nn</value>
  </property>
</configuration>
```

Create file `/usr/local/hadoop-2.7.3/etc/hadoop/yarn-site.xml` and pase below code

```bash
<configuration>
  <!-- Site specific YARN configuration properties -->
  <property>
    <name>yarn.nodemanager.aux-services</name>
    <value>mapreduce_shuffle</value>
  </property>
  <property>
    <name>yarn.nodemanager.vmem-check-enabled</name>
    <value>false</value>
  </property>
</configuration>
```

## Formatting NameNode - onetime process

```bash
/usr/local/hadoop-2.7.3/bin/hdfs namenode -format
```

## Start NameNode, DataNode

```bash
$ /usr/local/hadoop-2.7.3/sbin/start-dfs.sh

$ jps
```

## Start yarn

```bash
$ /usr/local/hadoop-2.7.3/sbin/start-yarn.sh

$ jps
```
