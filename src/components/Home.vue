<template>
    <div class="back">
        <div class="menu">
            <ul>
                <li v-for="{{item in links}}" :key="item.index" @click="{{item.route}}">{{item.content}}</li>
            </ul>
        </div>
    </div>
</template>
