import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Container from "../components/container";
import DashboardTile from "../components/dashboard-tile";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hadoop | Spark | Kafka</title>
      </Head>
      <Container>
        <div className="my-6 flex flex-col space-y-12 items-center">
          <h1 className="m-0 text-3xl md:text-3xl text-center text-white font-black">
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-blue-500">
              Introduction to Hadoop, Kafka & Spark
            </span>
          </h1>
          <DashboardTile
            href="posts/hadoop"
            title="Hadoop"
            description="Find information about Hadoop"
          />
          <DashboardTile
            href="posts/spark"
            title="Spark"
            description="Find information about Spark"
          />
          <DashboardTile
            href="posts/kafka"
            title="Kafka"
            description="Find information about Kafka"
          />
          {/*    <a
            className={`w-full max-w-xl md:w-snug p-6 text-left text-gray-400 border border-gray-300 rounded-xl transition-colors`}
          >
            <h3 className="mb-4 text-2xl sm:text-3xl">Demo &rarr;</h3>
            <span className="m-0 text-sm sm:text-lg leading-normal">
              Explore the deployed example Elasticsearch project
            </span>
            <span className="ml-2 leading-normal text-xs sm:text-sm">
              (In Progress...)
            </span>
          </a> */}
          {/* <DashboardTile
            href="demo"
            title="Demo"
            description=""
          /> */}
        </div>
      </Container>
    </Layout>
  );
}
