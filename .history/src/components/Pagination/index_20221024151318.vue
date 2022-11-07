<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button v-if="startNumAndendNum.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>
    <button v-if="startNumAndendNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndendNum.end"
      :key="index"
      v-if="page >= startNumAndendNum.start"
    >
      {{ page }}
    </button>

    <button v-if="startNumAndendNum.end < totalPage - 1">···</button>
    <button v-if="startNumAndendNum.end < totalPage">{{ totalPage }}</button>
    <button>下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
    <h1>{{ startNumAndendNum }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 计算总页数
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算连续页码起始和终止页码
    startNumAndendNum() {
      // 解构赋值
      const { continues, pageNo, totalPage } = this;
      let start = 0,
        end = 0;
      // 总页数小于连续页数
      if (totalPage < continues) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        // 当前页处于页数两端时,会有起始和终止页码超出边界情况
        // 当start超出边界
        if (start < 1) {
          start = 1;
          end = continues;
        }
        // 当end超出边界
        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>